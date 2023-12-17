// api.ts
import { BackendData, StoreItemData } from "../(types)/types";
import { API_URL } from "./constants";

export const fetchData = async (): Promise<BackendData[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const backendData: BackendData[] = await response.json();
    return backendData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const preprocessData = (data: BackendData[]): StoreItemData[] => {
  const processedData: StoreItemData[] = [];
  let autoIncrementId = 1;

  data.forEach((item) => {
    const isPromotion = !/normal|single/i.test(item.productName);

    const numTickets = item.productName.toLowerCase().includes("bundle")
      ? 5
      : 1;

    const matineePrice = item.productName.toLowerCase().includes("bundle")
      ? item.matineeTicketPriceSgd * numTickets
      : item.matineeTicketPriceSgd;

    const nightPrice = item.productName.toLowerCase().includes("bundle")
      ? item.nightTicketPriceSgd * numTickets
      : item.nightTicketPriceSgd;

    const matineeTicket: StoreItemData = {
      id: autoIncrementId++,
      productId: item.productId,
      name: `${item.productName} - Matinee`,
      description: `${item.productDescription} - Matinee`,
      startPeriod: item.startPeriodSgt,
      endPeriod: item.endPeriodSgt,
      stock: item.matineeTicketStock,
      imgUrl: `/images/store/${item.productName.toLowerCase()}_matinee.png`,
      isPromotion,
      numTickets,
      showTime: "matinee",
      price: matineePrice,
    };

    processedData.push(matineeTicket);

    const nightTicket: StoreItemData = {
      id: autoIncrementId++,
      productId: item.productId,
      name: `${item.productName} - Night`,
      description: `${item.productDescription} - Night`,
      startPeriod: item.startPeriodSgt,
      endPeriod: item.endPeriodSgt,
      stock: item.nightTicketStock,
      imgUrl: `/images/store/${item.productName.toLowerCase()}_night.png`,
      isPromotion,
      numTickets,
      showTime: "night",
      price: nightPrice,
    };

    processedData.push(nightTicket);
  });

  return processedData;
};
