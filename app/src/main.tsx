import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import { PostProvider } from './contexts/PostContext';
import { ChoiceProvider } from './contexts/ChoiceContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PostProvider>
    <ChoiceProvider>
    <App />
    </ChoiceProvider>
  </PostProvider>
);

