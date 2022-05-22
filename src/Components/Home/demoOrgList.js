
export const addCard = {
    orgIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsH-kmHwy1iJgBeyrDPIRgPvkvh5MH1UMGg&usqp=CAU",
    orgTitle: "Add"
}
const demoOrgList = [
    {
        orgIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEX////yUCJ/ugAApO//uQDxOgBytADyShT2j3v/+/T/tAAAnO74+/R7uACpz3T0+f50wPTxMgD1hW//rgDwHABnrwDxQwD4s6ejzGgAle0Amu5ovPNVGgEPAAABAklEQVR4nO3biQnCQBRF0bhkceKWxGjU/vsUHKzgMyDh3AIenAJeVUmSJEmSJEmSJEmSJEmSpH/tVocaxu/KcW5CzQWF9SZU22Vhsw3VEBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhKuSDi0oe4/4SlUSeHYxXpk4XIOtRQUSlL5LtHyzCFYQeGzD/V6Z+CUQk0Fhf0u1jUL0z5UIiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRckXD97zxJkiRJkiRJkiRJkiRJkhTrA29gzkcc3y0uAAAAAElFTkSuQmCC"
        ,
        orgTtitle: "Microsoft"
    }
    ,
    {
        orgIcon: "data:image/jpeg;base64,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",
        title: "Institute Of Engineering & Technology"
    }
    ,
    {
        orgIcon: "data:image/png;base64,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",
        title: "Adobe Inc."
    }
];

export default demoOrgList;