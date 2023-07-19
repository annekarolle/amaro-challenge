 
import { Top } from "./style.PromoTopBanner";

export const PromoTopBanner = ({frete, pix, link}) => {
  return(
    <Top>
   
        <div className="frete">
          <h5>  {frete}</h5>
        </div>
        <div className="pix">
            <h5>
            {pix}
            </h5>
        </div>
        
            <ul className="links">
                {
                    link.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                    ))
                }
            </ul>
        
    </Top>
  )

};
