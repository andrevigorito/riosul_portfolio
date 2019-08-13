import React, { Fragment } from 'react';
import { Form, Formik, Field } from 'formik';




const handleValidate = ({ type,email,description }) => {
  const errors = {};
  
  if (!type) errors.type = "OBRIGATÓRIO";
  if (!email) errors.email = "OBRIGATÓRIO";
  if (!description) errors.description = "OBRIGATÓRIO";
  
  return errors;
}

const handleSubmit = (props) => async (values, {setSubmitting, resetForm}) => {
    
    await props.onJustifieCreation({...values}); 
    setSubmitting(false);
    
};

const JustifieForm = (props) => {
 
  const { classes } = props;
    
  return (
      <Fragment>      
        <Formik
          enableReinitialize={true}
          initialValues={{ 
                type: '',
                email: '',
                description: '',
          }}
          validate={handleValidate}
          onSubmit={handleSubmit(props)}
        >
          {
              props => (
                <Form>
                
                    <label htmlFor="type">Tipo</label>
                      <div>
                          <Field 
                              id="type" 
                              name="type" 
                              component="select"
                              value={props.values.type}
                              onChange={props.handleChange}
                              onBlur={props.handleBlur} 
                              style={{
                                  borderColor:
                                      props.errors.type && props.touched.type && "red"
                              }}
                          >
                            <option value='' ></option>                                
                            <option value="ERRO HUMANO">ERRO HUMANO</option>
                            <option value="SEM CULPADO">SEM CULPADO</option>
                          </Field>
                          {props.errors.type && props.touched.type && (
                              <div style={{ color: "red" }}>{props.errors.type}</div>
                          )}
                      </div>
                
                    <label htmlFor="email">E-Mail</label>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={props.values.eamil}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            style={{
                                borderColor:
                                    props.errors.email && props.touched.email && "red"
                            }}
                        />
                        {props.errors.email && props.touched.email && (
                            <div style={{ color: "red" }}>{props.errors.email}</div>
                        )}
                    </div>
                    
                    <label htmlFor="description">Descrição</label>
                    <div>
                        <input
                            id="description"
                            name="description"
                            type="description"
                            value={props.values.description}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            style={{
                                borderColor:
                                    props.errors.description && props.touched.description && "red"
                            }}
                        />
                        {props.errors.description && props.touched.description && (
                            <div style={{ color: "red" }}>{props.errors.description}</div>
                        )}
                    </div>
                    
                    <button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        disabled={props.isSubmitting}
                        style={{margin: '10px'}}
                    >
                        SALVAR
                    </button>

                    <button 
                        variant="contained" 
                        color="primary"
                        type="reset"
                        onClick={props.handleReset}
                        disabled={!props.dirty || props.isSubmitting}
                        style={{margin: '10px'}}
                    >
                        RESET
                    </button>
                    
                </Form>
            )
          }
      </Formik>
      
    </Fragment>    
  );
};



export default JustifieForm;
