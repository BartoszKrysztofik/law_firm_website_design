import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { specializationData } from '@/data/specializationData/specializationData';


const SpecializationDetail = () => {
    const router = useRouter();
    const { id } = router.query

    const specialization = specializationData.find((spec) => spec.id === Number(id));

    useEffect(() => {
        if (id) {
            const element = document.getElementById(`text-${id}`)
            if(element)
            {
                element.scrollIntoView({behavior: 'smooth'})
            }
        }
    }, [id])
    
    if (!specialization) {
        return <div>Specjalizacja nie znaleziona.</div>;
    }

    return (
        <div>
            <h1>{specialization.title}</h1>
            <p id={`text-${specialization.id}`}>{specialization.text}</p>
            <div>{specialization.content}</div>
        </div>
    );
};

export default SpecializationDetail;