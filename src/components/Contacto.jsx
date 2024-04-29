import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = ()=> {
  return (
    <div className="formulario">
      <div className="bienv">Cuentanos, ¿en que te podemos ayudar?</div>
      <br />
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="correo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Contacto