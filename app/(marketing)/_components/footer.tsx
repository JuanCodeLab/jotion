import Image from "next/image";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
                <Button variant="ghost" size="sm">
                    Politica de Privacidad
                </Button>
                <Button variant="ghost" size="sm">
                    Terminos y Condiciones
                </Button>
            </div>
        </div>

    );
}