// Static Class

export default class Random {
    static getRandomChar() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return characters[Math.floor(Math.random() * characters.length)];
    }

    static getRandomText(text: string) {
        let randomText = "";

        for (let i = 0; i < text.length; i +=1 ) {
            text[i] === " " ? randomText += " " : randomText += this.getRandomChar();
        }
        return randomText;
    }
}