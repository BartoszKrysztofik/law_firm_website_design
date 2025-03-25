'use client'

import Button from "@/components/techComponents/Button";
import { specializationData } from "@/data/specializationData/specializationData";

const SpecializationPage: React.FC = () => {
    const handleScrollToSection = (id: number) => {
        const element = document.getElementById(`text-${id}`);
        console.log('id:', id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return (
        <div className=" w-full h-full flex-col justify-center items-center px-10 py-10">
            <div className="flex items-center justify-around text-ButtonFont" >
                {specializationData.map((specialization) => (
                    <div key={specialization.id}>
                        <Button
                            type="button"
                            variant="opacity"
                            onClick={()=>handleScrollToSection(specialization.id)}
                        >
                            {specialization.title}
                        </Button>
                    </div>
                ))}
            </div>    
            <div className="py-20 px-20"> 
                {specializationData.map((specialization) => (
                    <div
                        className="py-10"
                        key={specialization.id}
                        id={`text-${specialization.id}`}
                    > 
                        <div className="text-TitleNameFont py-10">
                            {specialization.title}
                        </div>
                        <div className="text-LargeTextFont py-10">
                            {specialization.text}
                        </div>
                        <div className="text-NormalTextFont py-4">
                            {specialization.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecializationPage