import { useCallback,useEffect,useState } from 'react';

export const useFetchImages = () => {
 
    //Inicializamos estados
    const [images, setState] = useState([]);
    const [input, setInput] = useState("");
    const [loading,setLoading]=useState(true);

    //traemos imagenes
    const peticion = useCallback(async () => {
        const key = "client_id=GqI5P13t12Xi8595weQHBBH33owHaMH4OkTp2AVSVmo";

        let route = `https://api.unsplash.com/photos?${key}`;

        if (input !== "") {
            route = `https://api.unsplash.com/search/photos/?query=${encodeURI(input)}&${key}`;
        }

        setLoading(true);

        const res = await fetch(route);

        const data = await res.json();

        if (data.results) {
            setState(data.results);
        } else {
            setState(data);
        }

        setLoading(false);
    }, [input])

    useEffect(() => {
        peticion();
        setInput("");
    }, [peticion]);
    //Creamos el imput de busqueda


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value;

        setInput(text);
    }


    return[images,loading,handleSubmit];
}
