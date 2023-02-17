import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from "./styles";
import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp, FaDollarSign } from 'react-icons/fa';

const Resume = ({income, expense, total}) => {
    return (
        <C.Container>
            <ResumeItem value={income} title="Entradas" Icon={FaRegArrowAltCircleUp}/>
            <ResumeItem value={expense} title="Saidas" Icon={FaRegArrowAltCircleDown}/>
            <ResumeItem value={total} title="Total" Icon={FaDollarSign}/>
        </C.Container>
    );
}
 
export default Resume;