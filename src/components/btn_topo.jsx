import React from "react";
import ImgTopo from '../images/btnTopo.png';
const BtnTopo = () => (
    <div class="btnNav">
        <a href="#top">
            <img src={ImgTopo} alt="Voltar para inicio" title="Voltar para inicio" class="btnNavTopo"/>
        </a>
    </div>
);

export default BtnTopo;