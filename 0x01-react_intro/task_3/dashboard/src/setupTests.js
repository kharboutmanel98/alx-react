import { configure } from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

// Configure Enzyme to use the React 18 adapter
configure({ adapter: new Adapter() });
