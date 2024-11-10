import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/login/login';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';
import { DataBinding } from './components/data-binding/data-binding';
import { NasaAPI } from './components/nasa-api/nasa-api';
import { EventBinding } from './components/event-binding/event-binding';
import { MouseDemo } from './components/mouse-demo/mouse-demo';
import { MouseAnimation } from './components/mouse-animation/mouse-animation';
import { AnimationDemo } from './components/animation-demo/animation-demo';
import { MouseMove } from './components/mouse-move/mouse-move';
import { KeyDemo } from './components/key-demo/key-demo';
import { ElementState } from './components/element-state/element-state';
import { ButtonDemo } from './components/button-demo/button-demo';
import { EmiCalculator } from './components/emi-calculator/emi-calculator';
import { TimeoutDemo } from './components/timeout-demo/timeout-demo';
import { IntervalDemo } from './components/interval-demo/interval-demo';
import { DateDemo } from './components/date-demo/date-demo';
import { FakestoreSlideshow } from './components/fakestore-slideshow/fakestore-slideshow';
import { TouchDemo } from './components/touch-demo/touch-demo';
import { FormDemo } from './components/form-demo/form-demo';
import { FormikDemo } from './components/formik-demo/formik-demo';
import { HookFormDemo } from './components/hook-form-demo/hook-form-demo';
import { CustomComponent } from './components/custom-component/custom-component';
import { ConditionalRender } from './components/conditional-render/conditional-render';
import { CookiesProvider } from 'react-cookie'; 
import { CookieDemo } from './components/cookie-demo/cookie-demo';
import { ContextDemo } from './components/context-demo/context-demo';
import { ReducerDemo } from './components/reducer-demo/reducer-demo';
import { CycleDemo } from './components/cycle-demo/cycle-demo';
import { UserLogin } from './class-components/user-login';
import { ClassDataBinding } from './class-components/class-data-binding';
import { ClassFromDemo } from './class-components/class-form-demo';
import { MuiDemo } from './components/mui-demo/mui-demo';
import { LocalizationProvider } from '@mui/x-date-pickers'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
     <React.StrictMode>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CookiesProvider>
               <App />
            </CookiesProvider>
        </LocalizationProvider>

     </React.StrictMode>
     
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
