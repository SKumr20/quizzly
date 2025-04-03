"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function FeatureSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Get The Best Score You Deserve!
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Practice from our library of 500+ questions, from many NPTEL Courses
              </p>
            </div>
            <Image
              src="/images/exam.svg"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute -right-20 lg:-right-[10%] -bottom-20 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                No Hidden Costs, Free For All!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Get started on your grind, completely free of cost!
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Easy To Use, Flexible For Your Needs!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Get instant score, practice, and improve as you go!
              </p>
            </div>
            <Image
              src="/images/test.svg"
              width={400}
              height={400}
              alt="linear demo image"
              className="absolute scale-90 -right-10 lg:-right-[5%] -bottom-20 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      );
  }