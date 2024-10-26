const textArea: HTMLTextAreaElement = document.createElement('textarea');
const container: HTMLParagraphElement = document.createElement('p');
const textAreaForbidden: HTMLTextAreaElement = document.createElement('textarea');
const appContainer: HTMLDivElement | null = document.querySelector<HTMLDivElement>('#app');
const badWords: Array<string> = [];

const forbiddenWords = function(text: string, words: Array<string>): string {
    words.forEach((word: string) => {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        text = text.replace(regex, (matched) => `<del>${matched}</del>`);
    });
    return text;
};

const generateArray = function(e: Event): void {
    const inputWords = (e.target as HTMLTextAreaElement).value
        .replace(/[^\w\s]|_/g, '')
        .split(' ')
        .filter(word => word.length > 0);
    badWords.push(...inputWords);
};

textArea.addEventListener('input', () => {
    container.innerHTML = forbiddenWords(textArea.value, badWords);
});

textAreaForbidden.addEventListener('input', generateArray);

appContainer?.append(textArea);
appContainer?.append(textAreaForbidden);
appContainer?.append(container);
