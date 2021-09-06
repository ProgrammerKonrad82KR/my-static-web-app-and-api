import * as React from 'react';
import Input from '../../ui/Input/Input';
import Image from '../../ui/Image/Image';
import Spinner from '../../ui/Spinner/Spinner';
import Button from '../../ui/Button/Button';

import axios from 'axios';
import { AxiosInstance } from 'axios';

import './formStrip.css';

class formStrip extends React.Component {
    http: AxiosInstance;
    state = {
        stripForm: {
            stripName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'select strip'
                },
                value: ''
            },
            stripImage: {
                pathImage: ''
            }
          }
        }

    createFunc = (url: string) => {
            this.http = axios.create({
                baseURL: url,
                headers: {
                    'key': '000000000000000000000000BE617C59',
                    'Access-Control-Allow-Origin': 'origin,x-requested-with',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                }
            });
            return this.http;
      }

    executeFunc = (url: string, http: AxiosInstance) => {
        const resultData = http.get(url)
            .then(response => {
                console.log('RESPONSE DATA: ' + response.data);
                console.log('RESPONSE STATUS: ' + response.status);
                return String(response.data);
            })
            .catch(error => {
                if (error.response) {
                    console.error('Status:', error.response.status);
                    console.error('Data:', error.response.data);
                    console.error('Headers:', error.response.headers);
                } else {
                    console.error('Error Message:', error.message);
                }
                return String(error.message);
            });

        return resultData;
    }

    constructor()
    {
        super(2);
		this.http = this.createFunc('http://localhost:7071/api');
    }

    componentDidMount()
    {
        
        const data = this.executeFunc('/ APIFuncLoad2', this.http);
        if (data) {
            const stripImageForm = { ...this.state.stripForm };
            const imageName = { ...this.state.stripForm.stripImage };
            imageName.pathImage = String(data);
            stripImageForm.stripImage = imageName;
            this.setState({ stripForm: stripImageForm });
        }
    }

    stripLoadHandler: any = (event: any) => {
        event.preventDefault();
        const valueName = event.target.value;
        if(valueName)
        {
            const stripImageForm = { ...this.state.stripForm };
            const imageName = { ...this.state.stripForm.stripImage };
            const data = this.executeFunc('/APIFuncLoad1?name=' + valueName, this.http);
            if(data) {
                imageName.pathImage = String(data);
                stripImageForm.stripImage = imageName;
                this.setState({ stripForm: stripImageForm });
            }
        }
    }

    stripRandomLoadHandler: any = (event: any) => {
        event.preventDefault();
        const data = this.executeFunc('/ APIFuncLoad2', this.http);
        if (data) {
            const stripImageForm = { ...this.state.stripForm };
            const imageName = { ...this.state.stripForm.stripImage };
            imageName.pathImage = String(data);
            stripImageForm.stripImage = imageName;
            this.setState({ stripForm: stripImageForm });
        }
    }

    render() {

        let form = <Spinner />;
        const formElementInput = { id: 0, config: this.state.stripForm.stripName };
        const formElementImage = { id: 1, config: this.state.stripForm.stripImage };
        let srcImage = <p>${`Enter your strip`}</p>;
        if(formElementImage.config.pathImage)
        {
             srcImage = (<Image key={formElementImage.id}
                          pathImage={formElementImage.config.pathImage} />);
        }
        form = <div>
              <Input
                  key={formElementInput.id}
                  elementType={formElementInput.config.elementType}
                  elementConfig={formElementInput.config.elementConfig}
                  value={formElementInput.config.value}
                  changed={(event: any) => { this.stripLoadHandler(event, formElementInput.id); }}/>
                  <Button btnType="Success" disabled={false} clicked={this.stripRandomLoadHandler}>LOAD RANDOM STRIP</Button>
                  {srcImage}
              </div>;
        return (
            <React.Fragment>
                <div className="formStrip">
                    <h2>Enter your Strip</h2>
                    {form}
                </div>
            </React.Fragment>
        );
    }
}

export default formStrip;