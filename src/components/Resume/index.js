import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from 'react-icons/fa';

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem value="1000" title="Entradas" Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem value="1000" title="Saidas" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem value="1000" title="Total" Icon={FaDollarSign}/>
        </C.Container>
    );
}
 
export default Resume;