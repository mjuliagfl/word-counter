const error = "Error: please insert some word on the text box"
function countStrings(values: Object, elementId: string) {
    if ('text' in values) {
        const t = values['text']
        if (typeof t === "string") {
            const words = t.split(' ')
            var count = 0
            for(var word of words) {
                if (!(word === '' || word === ' ')) {
                    count = count + 1
                }
            }
            const label = document.getElementById(
                elementId,
              ) as HTMLDivElement | null;
            if (label) {
                if (count > 0) {
                    label.textContent = count.toString()
                } else {
                    label.textContent = error
                }    
            }
        }
    }
};

export default countStrings 