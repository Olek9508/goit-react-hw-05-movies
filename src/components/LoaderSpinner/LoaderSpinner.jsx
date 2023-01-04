import {
    LoaderBox,
    LoaderSpinner,
} from './LoadSpinner.styled';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

export default function Loader() {
    return (
        <IconContext.Provider value={{color: 'orange'}}>
            <div role='alert'>
                <LoaderBox>
                    <LoaderSpinner>
                        <AiOutlineLoading3Quarters size='90' />
                    </LoaderSpinner>
                    Loading ...
                </LoaderBox>
            </div>
        </IconContext.Provider>
    )
};