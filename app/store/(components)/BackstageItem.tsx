"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./(utils)/Card";
import { Label } from "./(utils)/Label";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./(utils)/Dialog";
import { Button } from "./(utils)/Button";
import { DialogClose } from "@radix-ui/react-dialog";
import Link from "next/link";

export function BackstageItem() {
  return (
    <Card className="lg:max-w-md w-full max-w-[20rem] rounded-xl transform transition-transform hover:scale-[102%] ease-in-out duration-500">
      <CardHeader className="block p-0">
        <Image
          className="w-full h-52 rounded-t-xl"
          width={0}
          height={0}
          unoptimized
          src="/images/store/backstage.png"
          alt="backstage"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/store/ticket.png";
          }}
        />
        <CardTitle className="px-6 pt-3">Backstage Pass</CardTitle>
        <CardDescription className="px-6">
          <Label className="text-lg">$12</Label>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0"></CardContent>
      <CardFooter className="block w-full mb-2 pb-3">
        <div className="flex items-start justify-between pt-1">
          <Label className="mb-2"></Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button>See More</Button>
            </DialogTrigger>
            <DialogContent>
              <div>
                <div className="font-bold text-2xl">Backstage Pass</div>
                <div className="text-sm mt-3">
                  🎭 Backstage Pass Order Now Available! 🌟Get ready to elevate
                  your theatre experience! Our exclusive Backstage Pass is up
                  for grabs for just S$12/person! Limited availability.
                </div>
                <div className="mt-5 w-full flex justify-end">
                  <DialogClose asChild>
                    <Button variant="secondary" className="mx-1">
                      Close
                    </Button>
                  </DialogClose>
                  <Link href="https://bit.ly/ICN2024BackstagePass">
                    <Button className="mx-1">Find Out More</Button>
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardFooter>
    </Card>
  );
}
