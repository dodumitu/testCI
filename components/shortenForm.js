import ShortenLink from "./shortenLink.js";

export default class ShortenForm {
    $container;
    $shortenForm;
    $shortenFormHeader;
    $label;
    $submitBtn;
    $urlInput;
    $footer;
    $shortendLinkModal;

    constructor() {
        this.$container = document.createElement("div");

        this.$shortenForm = document.createElement("form");
        this.$shortenForm.setAttribute("class", "mb-4");
        this.$shortenForm.addEventListener("submit", this.onSubmit);

        this.$shortenFormHeader = document.createElement("h2");
        this.$shortenFormHeader.textContent = "Link Shortener";
        this.$shortenFormHeader.setAttribute("class", "flex justify-center font-bold mb-4 text-3xl")

        this.$label = document.createElement("label");
        this.$label.textContent = "Enter a link:";
        this.$label.setAttribute("class", "mr-4");

        this.$urlInput = document.createElement("input");
        this.$urlInput.setAttribute("class", "w-4/5")

        this.$submitBtn = document.createElement("button");
        this.$submitBtn.type = "submit";
        this.$submitBtn.textContent = "➽";
        this.$submitBtn.setAttribute("class", "bg-slate-800 text-white font-bold rounded-sm ml-2 px-2");

        this.$footer = document.createElement("h2");
        this.$footer.textContent = "By using shrtcode you agree to our Terms of Service";
        this.$footer.setAttribute("class", "flex justify-center mt-2");

        this.$shortendLinkModal = document.createElement("div");
    }


    onSubmit = (e) => {
        e.preventDefault();
            let random_string = (Math.random() + 1).toString(36).substring(7)

            this.$shortendLinkModal.innerHTML = "";
            
            const link = this.$urlInput.value;
            const shortenLink = new ShortenLink();

            shortenLink.$shortenLink.href = link;
            shortenLink.$shortenLink.textContent = `shortco.de/${random_string}`;
            shortenLink.render(this.$shortendLinkModal);

    }

    render() {
        this.$shortenForm.appendChild(this.$shortenFormHeader);
        this.$shortenForm.appendChild(this.$label);
        this.$shortenForm.appendChild(this.$urlInput);
        this.$shortenForm.appendChild(this.$submitBtn);

        this.$container.appendChild(this.$shortenForm);
        this.$container.appendChild(this.$footer);
        this.$container.appendChild(this.$shortendLinkModal);

        return this.$container;
    }
}
