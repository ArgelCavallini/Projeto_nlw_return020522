import { CloseButton } from "./CloseButton";
import bugImageUrl from '../assets/bug.svg';
import ideiaImageUrl from '../assets/idea.svg';
import outroImageUrl from '../assets/thought.svg';

const FeedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
           source:bugImageUrl,
           alt: "Imagem de um inseto"
        }
    },
    IDEIA: {
        title: "Ideia",
        image: {
           source:ideiaImageUrl,
           alt: "Imagem de uma lâmpada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
           source:outroImageUrl,
           alt: "Imagem de uma nuvem"
        }
    },
}

export function WidgetForm(){
    return(
        <div className="pg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            
                <CloseButton></CloseButton>
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(FeedbackTypes).map(([key,value]) => {
                    return (
                        <button
                        className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
            </div>
            
            <footer className="text-xs text-neutral-400">
                Feito com <a className="underline underline-offset-2"> Rocketseat</a>
            </footer>
        </div>
    );
}