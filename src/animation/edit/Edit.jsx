import Lottie from 'react-lottie';
import animationData from './edit.json';

const Edit = () =>{

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <div>
             <Lottie options={defaultOptions}
                height={100}
                width={100}
              />
              
        </div>
    )
}
export default Edit;