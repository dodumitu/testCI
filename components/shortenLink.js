export default class ShortenLink {
    $shortenLinkContainer;
    $shortenLinkHeader;
    $shortenLink;

    constructor() {

        this.$shortenLinkContainer = document.createElement("div");
        this.$shortenLinkContainer.setAttribute("class", "bg-green-100 rounded-xl py-4");

        this.$shortenLinkHeader = document.createElement("h2");
        this.$shortenLinkHeader.textContent = "Link generated!";
        this.$shortenLinkHeader.setAttribute("class", "flex justify-center text-2xl font-bold");

        this.$shortenLink = document.createElement("a");
        this.$shortenLink.setAttribute("class", "flex justify-center text-2xl mt-2 underline");
    }

    render( Container) {
        this.$shortenLinkContainer.appendChild(this.$shortenLinkHeader);
        this.$shortenLinkContainer.appendChild(this.$shortenLink);

         Container.appendChild(this.$shortenLinkContainer);
    };
}