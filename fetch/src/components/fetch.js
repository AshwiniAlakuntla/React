import { useState,useEffect } from "react";
function Sample(){
    const [data, setData] = useState('');
    useEffect(() => {
        fetch(`https://dummyjson.com/products/1`)
        .then((response) => response.json())
        .then((actualData) => {
            setData(actualData);
          });
 }, []);
 console.log(data);
    if(data){
    return(<div>
        <div>Sample</div>
        <strong>Id:</strong>{data.id}<br/><br/>
        <strong>title:</strong>{data.title}<br/><br/>
        <strong>description:</strong>{data.description}<br/><br/>
        {data.images.map((iphone) => <p><img width={"200px"} height={"200px"} display={'block'}  src={iphone} alt="images"/></p>)}
      
      </div>
    )
}
}
export default Sample;