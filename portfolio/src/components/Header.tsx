"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>("portuguese");

    return (
        <div className="flex items-center justify-between px-4 py-2 sticky top-0 z-50 bg-transparent">
            <h1 className="text-2xl font-bold">l3gium</h1>

            <div className="flex items-center gap-4">
                <Select defaultValue="portuguese" onValueChange={(value) => setSelectedLanguage(value)}>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder={selectedLanguage || "Select a language"} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="portuguese">
                                <Image src="/countries/brazil.png" alt="fodase" width={36} height={16} /> PT-BR
                            </SelectItem>
                            <SelectItem value="english">
                                <Image src="/countries/united-kingdom.png" alt="fodase" width={36} height={16} /> ENG
                            </SelectItem>
                            <SelectItem value="spanish">
                                <Image src="/countries/spain.png" alt="fodase" width={36} height={16} /> ESP
                            </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <a href="#" className="cursor-pointer">Sobre mim</a>
                <a href="#" className="hover:underline">Projetos</a>
                <a href="#" className="hover:underline">Contato</a>
            </div>
        </div>
    );
}

