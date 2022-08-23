import React from 'react'
import useForm from '../styles/hooks/useForm';
import Carrousel from './carrousel';
import TextField from './form/textField.jsx';

const Contact = () => {
  const { form, onSubmit, handleFormChange} = useForm({
    name: '',
    email: '',
    phoneNumber: ''
  },
  ()=> handleSubmit());

  const handleSubmit = () => {
    console.log(form);
  }

  return (
    <div className='container'>
        <form onSubmit={onSubmit} className='container-contact-form'>
          <div className='form-contact'>
            <h4 className='title-contact-form'>¿Quieres tener una consulta mas personalizada?</h4>
            <TextField
                className='container-field-contact'
                fieldClassName='textfiel-contact'
                placeholder='Nombre'
                value={form.name}
                handler={handleFormChange}
                name='name'
            />
            <TextField
                className='container-field-contact'
                fieldClassName='textfiel-contact'
                placeholder='Correo electronico'
                value={form.email}
                handler={handleFormChange}
                name='email'
            />
            <TextField
                className='container-field-contact'
                fieldClassName='textfiel-contact'
                placeholder='Numero celular'
                value={form.phoneNumber}
                handler={handleFormChange}
                name='phoneNumber'
            />
            <button className='btn mt-5' type='submit'>Enviar</button>
          </div>
          <div className='carrousel-contact-container'>
            <span>Androdev es</span>
            <Carrousel
              slidesPerView={1}
              bulletsDirection='horizontal-banner'
              className=''
              >
                <span>
                  Arte en la codificacion
                </span>
                <span>
                  Solucion en tus manos
                </span>
              </Carrousel>
          </div>
        </form>

    </div>
  )
}

export default Contact