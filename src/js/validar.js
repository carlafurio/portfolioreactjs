// import * as Yup from 'yup';

// export const Validar = Yup.object().shape({
//     nome: Yup.string().required('Preencher o campo obrigatório NOME!'),
//     email: Yup.string().email().required('Preencher o campo obrigatório E-MAIL!'),
//     assunto: Yup.string().required('Preencher o campo obrigatório ASSUNTO!'),
//     msg: Yup.string().required('Preencher o campo obrigatório MENSAGEM!'),
// })

// Importar a Biblioteca Yup para manipular os nomes dos IDs de cada input.
import * as Yup from 'yup';

export const Validar = Yup.object().shape({
    nome: Yup.string().required('*Preencher o campo obrigatório NOME!*'),
    email: Yup.string().email().required('*Preencher o campo obrigatório E-MAIL!*'),
    assunto: Yup.string().required('*Preencher o campo obrigatório ASSUNTO!*'),
    msg: Yup.string().required('*Preencher o campo obrigatório MENSAGEM!*'),
})