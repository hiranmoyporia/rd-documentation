import { useEffect } from "react";

export const Flex = ({ children, dir, wrap, justify, gap, gapX, gapY, align, sm, className }) => {
    return (
        <div className={`${sm?.dir ? Directions.find(e => e?.dir === sm?.dir)?.class : ""} flex ${dir ? Directions.find(e => e?.dir === dir)?.classMd : ""} ${sm?.wrap ? Wraps.find(e => e?.wrap === sm?.wrap)?.class : ""} ${wrap ? Wraps.find(e => e?.wrap === wrap)?.classMd : Wraps.find(e => e?.wrap === "wrap")?.classMd} ${sm?.justify ? Justify.find(e => e?.item === sm?.justify)?.class : ""} ${justify ? Justify.find(e => e?.item === justify)?.classMd : Justify.find(e => e?.item === "start")?.classMd} ${sm?.align ? Align.find(e => e?.item === sm?.align)?.class : ""} ${align ? Align.find(e => e?.item === align)?.classMd : Align.find(e => e?.item === "start")?.classMd} ${sm?.gap ? Gap.find(e => e?.gap === sm?.gap)?.class : ""} ${gap ? Gap.find(e => e?.gap === gap)?.classMd : ""} ${sm?.gapX ? Gap.find(e => e?.gap === sm?.gapX)?.classX : ""} ${gapX ? Gap.find(e => e?.gap === gapX)?.classMdX : ""} ${sm?.gapY ? Gap.find(e => e?.gap === sm?.gapY)?.classY : ""} ${gapY ? Gap.find(e => e?.gap === gapY)?.classMdY : ""} transition duration-500 ease-in-out ${className ? className : ""}`.replace(/\s\s+/g, ' ')}>
            {children}
        </div>
    );
}
const Directions = [
    {
        "dir": "row",
        "class": "flex-row",
        "classMd": "md:flex-row"
    },
    {
        "dir": "col",
        "class": "flex-col",
        "classMd": "md:flex-col"
    },
    {
        "dir": "row-reverse",
        "class": "flex-row-reverse",
        "classMd": "flex-row-reverse"
    },
    {
        "dir": "col-reverse",
        "class": "flex-col-reverse",
        "classMd": "flex-col-reverse"
    },
]
const Wraps = [
    {
        "wrap": "wrap",
        "class": "flex-wrap",
        "classMd": "md:flex-wrap",
    },
    {
        "wrap": "nowrap",
        "class": "flex-nowrap",
        "classMd": "md:flex-nowrap"
    },
    {
        "wrap": "wrap-reverse",
        "class": "flex-wrap-reverse",
        "classMd": "md:flex-wrap-reverse"
    }
]
const Justify = [
    {
        "item": "start",
        "class": "justify-start",
        "classMd": "md:justify-start"
    },
    {
        "item": "center",
        "class": "justify-center",
        "classMd": "md:justify-center"
    },
    {
        "item": "end",
        "class": "justify-end",
        "classMd": "md:justify-end"
    },
    {
        "item": "between",
        "class": "justify-between",
        "classMd": "md:justify-between"
    },
    {
        "item": "around",
        "class": "justify-around",
        "classMd": "md:justify-around"
    },
    {
        "item": "evenly",
        "class": "justify-evenly",
        "classMd": "md:justify-evenly"
    }
]
const Gap = [
    {
        "gap": "0",
        "class": "gap-0",
        "classX": "gap-x-0",
        "classY": "gap-y-0",
        "classMd": "md:gap-0",
        "classMdX": "md:gap-x-0",
        "classMdY": "md:gap-y-0",
    },
    {
        "gap": "0.5",
        "class": "gap-0.5",
        "classX": "gap-x-0.5",
        "classY": "gap-y-0.5",
        "classMd": "md:gap-0.5",
        "classMdX": "md:gap-x-0.5",
        "classMdY": "md:gap-y-0.5"
    },
    {
        "gap": "1",
        "class": "gap-1",
        "classX": "gap-x-1",
        "classY": "gap-y-1",
        "classMd": "md:gap-1",
        "classMdX": "md:gap-x-1",
        "classMdY": "md:gap-y-1"
    },
    {
        "gap": "1.5",
        "class": "gap-1.5",
        "classX": "gap-x-1.5",
        "classY": "gap-y-1.5",
        "classMd": "md:gap-1.5",
        "classMdX": "md:gap-x-1.5",
        "classMdY": "md:gap-y-1.5"
    },
    {
        "gap": "2",
        "class": "gap-2",
        "classX": "gap-x-2",
        "classY": "gap-y-2",
        "classMd": "md:gap-2",
        "classMdX": "md:gap-x-2",
        "classMdY": "md:gap-y-2"
    },
    {
        "gap": "2.5",
        "class": "gap-2.5",
        "classX": "gap-x-2.5",
        "classY": "gap-y-2.5",
        "classMd": "md:gap-2.5",
        "classMdX": "md:gap-x-2.5",
        "classMdY": "md:gap-y-2.5"
    },
    {
        "gap": "3",
        "class": "gap-3",
        "classX": "gap-x-3",
        "classY": "gap-y-3",
        "classMd": "md:gap-3",
        "classMdX": "md:gap-x-3",
        "classMdY": "md:gap-y-3"
    },
    {
        "gap": "3.5",
        "class": "gap-3.5",
        "classX": "gap-x-3.5",
        "classY": "gap-y-3.5",
        "classMd": "md:gap-3.5",
        "classMdX": "md:gap-x-3.5",
        "classMdY": "md:gap-y-3.5"
    },
    {
        "gap": "4",
        "class": "gap-4",
        "classX": "gap-x-4",
        "classY": "gap-y-4",
        "classMd": "md:gap-4",
        "classMdX": "md:gap-x-4",
        "classMdY": "md:gap-y-4"
    },
    {
        "gap": "5",
        "class": "gap-5",
        "classX": "gap-x-5",
        "classY": "gap-y-5",
        "classMd": "md:gap-5",
        "classMdX": "md:gap-x-5",
        "classMdY": "md:gap-y-5"
    },
    {
        "gap": "6",
        "class": "gap-6",
        "classX": "gap-x-5",
        "classY": "gap-y-5",
        "classMd": "md:gap-6",
        "classMdX": "md:gap-x-5",
        "classMdY": "md:gap-y-5"
    },
    {
        "gap": "7",
        "class": "gap-7",
        "classX": "gap-x-7",
        "classY": "gap-y-7",
        "classMd": "md:gap-7",
        "classMdX": "md:gap-x-7",
        "classMdY": "md:gap-y-7"
    },
    {
        "gap": "8",
        "class": "gap-8",
        "classX": "gap-x-8",
        "classY": "gap-y-8",
        "classMd": "md:gap-8",
        "classMdX": "md:gap-x-8",
        "classMdY": "md:gap-y-8"
    },
    {
        "gap": "9",
        "class": "gap-9",
        "classX": "gap-x-9",
        "classY": "gap-y-9",
        "classMd": "md:gap-9",
        "classMdX": "md:gap-x-9",
        "classMdY": "md:gap-y-9"
    },
    {
        "gap": "10",
        "class": "gap-10",
        "classX": "gap-x-10",
        "classY": "gap-y-10",
        "classMd": "md:gap-10",
        "classMdX": "md:gap-x-10",
        "classMdY": "md:gap-y-10"
    },
]
const Align = [
    {
        "item": "start",
        "class": "items-start",
        "classMd": "md:items-start"
    },
    {
        "item": "center",
        "class": "items-center",
        "classMd": "md:items-center"
    },
    {
        "item": "end",
        "class": "items-end",
        "classMd": "md:items-end"
    },
    {
        "item": "baseline",
        "class": "items-baseline",
        "classMd": "md:items-baseline"
    },
    {
        "item": "stretch",
        "class": "items-stretch",
        "classMd": "md:items-stretch"
    }
]

export const FlexRow = ({ size, sm, children, style, className, order }) => {
    return (
        <div style={style} className={`${size ? basis.find(e => e?.basis === size)?.classMd && sm?.size ? basis.find(e => e?.basis === size)?.classMd : basis.find(e => e?.basis === size)?.class : ""} ${sm?.size ? basis.find(e => e?.basis === sm?.size)?.class : ""} ${order ? Order.find(e => e?.order === order)?.classMd && sm?.order?Order.find(e => e?.order === order)?.classMd:Order.find(e => e?.order === order)?.class : ""} ${sm?.order ? Order.find(e => e?.order === sm?.order)?.class : ""} ${className ? className : ""}`.replace(/\s\s+/g, ' ')}>
            {children}
        </div>
    );
}
const basis = [
    {
        "basis": "0",
        "class": "basis-0",
        "classMd": "md:basis-0"
    },
    {
        "basis": "1",
        "class": "basis-1",
        "classMd": "md:basis-1"
    },
    {
        "basis": "2",
        "class": "basis-2",
        "classMd": "md:basis-2"
    },
    {
        "basis": "3",
        "class": "basis-3",
        "classMd": "md:basis-3"
    },
    {
        "basis": "4",
        "class": "basis-4",
        "classMd": "md:basis-4"
    },
    {
        "basis": "5",
        "class": "basis-5",
        "classMd": "md:basis-5"
    },
    {
        "basis": "6",
        "class": "basis-6",
        "classMd": "md:basis-6"
    },
    {
        "basis": "7",
        "class": "basis-7",
        "classMd": "md:basis-7"
    },
    {
        "basis": "8",
        "class": "basis-8",
        "classMd": "md:basis-8"
    },
    {
        "basis": "9",
        "class": "basis-9",
        "classMd": "md:basis-9"
    },
    {
        "basis": "10",
        "class": "basis-10",
        "classMd": "md:basis-10"
    },
    {
        "basis": "auto",
        "class": "basis-auto",
        "classMd": "md:basis-auto"
    },
    {
        "basis": "1/2",
        "class": "basis-1/2",
        "classMd": "md:basis-1/2"
    },
    {
        "basis": "1/3",
        "class": "basis-1/3",
        "classMd": "md:basis-1/3"
    },
    {
        "basis": "2/3",
        "class": "basis-2/3",
        "classMd": "md:basis-2/3"
    },
    {
        "basis": "1/4",
        "class": "basis-1/4",
        "classMd": "md:basis-1/4"
    },
    {
        "basis": "3/4",
        "class": "basis-3/4",
        "classMd": "md:basis-3/4"
    },
    {
        "basis": "1/5",
        "class": "basis-1/5",
        "classMd": "md:basis-1/5"
    },
    {
        "basis": "2/5",
        "class": "basis-2/5",
        "classMd": "md:basis-2/5"
    },
    {
        "basis": "3/5",
        "class": "basis-3/5",
        "classMd": "md:basis-3/5"
    },
    {
        "basis": "4/5",
        "class": "basis-4/5",
        "classMd": "md:basis-4/5"
    },
    {
        "basis": "1/6",
        "class": "basis-1/6",
        "classMd": "md:basis-1/6"
    },
    {
        "basis": "5/6",
        "class": "basis-5/6",
        "classMd": "md:basis-5/6"
    },
    {
        "basis": "5/12",
        "class": "basis-5/12",
        "classMd": "md:basis-5/12"
    },
    {
        "basis": "11/12",
        "class": "basis-11/12",
        "classMd": "md:basis-11/12"
    },
    {
        "basis": "full",
        "class": "basis-full",
        "classMd": "md:basis-full"
    },
    {
        "basis": "rest",
        "class": "flex-grow",
        "classMd": "md:flex-grow"
    },
]
const Order = [
    {
        "order": "1",
        "class": "order-1",
        "classMd": "md:order-1"
    },
    {
        "order": "2",
        "class": "order-2",
        "classMd": "md:order-2"
    },
    {
        "order": "3",
        "class": "order-3",
        "classMd": "md:order-3"
    },
    {
        "order": "4",
        "class": "order-4",
        "classMd": "md:order-4"
    },
    {
        "order": "5",
        "class": "order-5",
        "classMd": "md:order-5"
    },
    {
        "order": "6",
        "class": "order-6",
        "classMd": "md:order-6"
    },
    {
        "order": "7",
        "class": "order-7",
        "classMd": "md:order-7"
    },
    {
        "order": "8",
        "class": "order-8",
        "classMd": "md:order-8"
    },
    {
        "order": "9",
        "class": "order-9",
        "classMd": "md:order-9"
    },
    {
        "order": "10",
        "class": "order-10",
        "classMd": "md:order-10"
    },
    {
        "order": "11",
        "class": "order-11",
        "classMd": "md:order-11"
    },
    {
        "order": "12",
        "class": "order-12",
        "classMd": "md:order-12"
    },
    {
        "order": "first",
        "class": "order-first",
        "classMd": "md:order-first"
    },
    {
        "order": "last",
        "class": "order-last",
        "classMd": "md:order-last"
    },
    {
        "order": "none",
        "class": "order-none",
        "classMd": "md:order-none"
    }
]