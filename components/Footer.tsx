// Footer component

import footer from "@/styles/footer.module.scss";
import { firaSans } from "@/styles/fonts";

export default function Header() {

    return (
        <div className={footer.footer}>
            <h1 className={firaSans.className}>FOOTER</h1>
        </div>
    );
}