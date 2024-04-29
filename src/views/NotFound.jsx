import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const NotFound =() =>{
    const navigate = useNavigate();
    return (
        <div className="cont-alert">
        <div className="alert">
          {[
            'danger',
          ].map((variant) => (
            <Alert key={variant} variant={variant}>
              No encontramos lo que buscas!
              <br/><Alert.Link href="/" onClick={() => navigate(-1)}>Regresar</Alert.Link>
            </Alert>
          ))}
        </div>
        </div>
      );
}

export default NotFound