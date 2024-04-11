import React from "react";
// importação das bibliotecas
import { useForm } from "react-hook-form";
// import { yupResolver } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Whatsapp from '../images/icons/iconeWpp.png';
import Email from '../images/icons/icon-email.png';
import Loc from '../images/icons/icon-loc.png';
// import { Validar } from "../js/validar";
import { Validar } from "../js/validar";

const Contacts = () => {

    //estrutura os elementos do formulário html - INPUT
    const Input = ({ label, id, name, type, register, error }) => {
        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <input className="campoForm" id={id} name={name} type={type} placeholder="Digite aqui..." {...register(name)} />
            </span>
        )
    }

    //estrutura os elementos do formulário html - TEXTAREA
    const Textarea = ({ label, id, name, register, error }) => {
        return (
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <textarea className="campoFormMsg" id={id} name={name} placeholder="Digite aqui..." {...register(name)}></textarea>
            </span>
        )
    }

    // const { register, handleSubmit, reset, formState: { errors } } = useForm({
    //     resolver: yupResolver(Validar)
    // });

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    });

    // PARA PROGRAMAÇÃO BACK-END
    const onSubmit = data => {
        console.log(data);
    } 

    return (
        <section className="contacts" id="contatos">
            <div className="wrap">
                <h1 className="titleCt">Contato!</h1>
                <div className="boxContacts">
                    <div className="infoCt">
                        <p>Estes são os meus principais meios de contato.</p>
                        <p>Por aqui você pode me enviar um e-mail através do formulário ou clicar no ícone do Whatsapp para falar diretamente. Ficarei feliz pelo contato!</p>
                        <div>
                            <ul className="ulCt">
                                <li className="listCt"><img src={Email} alt="Icone do E-mail" title="Icone do E-mail" className="iconesCt" /><span>carlafurio13@gmail.com</span></li>

                                <li className="listCt"><a href="https://wa.me/5544999696011" ><img src={Whatsapp} alt="Icone do Whatsapp" title="Icone do Whatsapp" className="iconesCt" /></a><span>(44) 99969-6011</span></li>

                                <li className="listCt"><img src={Loc} alt="Icone da localizacao" title="Icone da localizacao" className="iconesCt" /><span>Rua Itapicuru, 337, Vila Nova - Londrina/PR</span></li>

                            </ul>
                        </div>
                    </div>
                    <div className="formContacts">
                        <form name="form" onSubmit={handleSubmit(onSubmit)} >
                            <label>Nome: </label>
                            <Input type="text" name="nome" id="nome" register={register} error={errors.nome} />
                            <label>E-mail: </label>
                            <Input type="email" name="email" id="email" register={register} error={errors.email} />
                            <label>Assunto: </label>
                            <Input type="text" name="assunto" id="assunto" register={register} error={errors.assunto} />
                            <label>Mensagem: </label>
                            <Textarea name="msg" id="msg" register={register} error={errors.msg} />
                            <div className="buttons">
                                <button name="btn-enviar" className="btn-form">enviar</button>
                                <button type="reset" className="btn-form" onClick={() => reset()}>limpar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contacts;