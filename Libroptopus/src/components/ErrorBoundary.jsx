import React from "react";

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, error: null, info: null};
    }

    static getDerivedStateFromError(error){
        return {hasError: true, error};
    }

    componentDidCatch(error, info){
        console.error("ErrorBoundary caught:", error, info);
        this.setState({info});
    }

    render(){
        if(this.state.hasError){
            return(
                <div style={{padding:20, fontFamily:"system-ui"}}>
                    <h2 style={{color:"#c53030"}}>Error en la aplicacion!</h2>
                    <pre style={{
                        whiteSpace:"pre-wrap", 
                        background: "#111",
                        color:"#fff",
                        padding: 12,
                        borderRadius: 8,
                        maxHeight: 300,
                        overflow: "auto"}}>
                            {String(this.state.error && this.state.error.toString())}
                            {this.state.info && this.state.info.componentStack}
                        </pre>
                        <p>Mira la consola del navegador para mas detalle</p>
                </div>
            );
        }
        return this.props.children;
    }
}