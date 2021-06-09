class Base{
    constructor(Nombre,Minutos){
      this.Nombre=Nombre;
      this.Minutos=Minutos;
      this.siguiente=null;
      this.anterior=null;
    }
    info(){
      return `Nombre: ${this.Nombre}, Minutos: ${this.Minutos} <br> `
    }
  }

  class Ruta{
    constructor(){
      this.Inicio=null;
    }
    
    Agregar(n){
      if (this.Inicio==null){
        this.Inicio=n;
        n.siguiente=this.Inicio;
        n.anterior=this.Inicio;
      }
      else{
        let ultimo=this.Inicio.anterior
        ultimo.siguiente=n;
        n.anterior=ultimo;
        n.siguiente=this.Inicio;
        this.Inicio.anterior=n;
      }
    }

    Imprimir(){
      if (this.Inicio==null){
        return false;
      }
      else{
        let t=this.Inicio;
        let r='';
        while(t.siguiente!=this.Inicio){
          r+=t.info();
          t=t.siguiente;
        }
        r+=t.info();
        
        return r;
      }
    }
   
  Eliminar(nombre){
    
    if(this.Inicio!=null)
    {
        if(this.Inicio.Nombre==nombre)
        {
            let t=this.Inicio.anterior;
            t.siguiente.siguiente.anterior=t;
            t.siguiente=t.siguiente.siguiente;
            this.Inicio=t.siguiente;
            return true;
        }
        else
        {
            let t=this.Inicio;
            while(t.siguiente!=this.Inicio)
            {
                if(t.siguiente.Nombre==nombre)
                {
                    t.siguiente.siguiente.anterior=t;
                    t.siguiente=t.siguiente.siguiente;
                    return true;
                }
                else
                {
                    t=t.siguiente;
                }
            }
        }
        return false;
    }
  }
  Buscar(nombre){
      if(this.Inicio!=null)
      {
          let t=this.Inicio;
          if(t.Nombre==nombre)
          {
              return t;
          }
          while(t.siguiente!=this.Inicio)
          {
              t=t.siguiente;
              if(t.Nombre==nombre)
              {
                  return t;
              }
          }
          return null;
      }
}
  crearRecorrido(baseInicio,horaInicio,HoraFin)
  { 
    if(this.Inicio!=null)
    {
      let t=this.Inicio;
      while(t!=baseInicio)
      {
        t=t.siguiente;
      }
      if(t==baseInicio)
      {
        let tiempo=0
        tiempo=horaInicio;
        let bases="";
        while(t.siguiente!=null && tiempo!=HoraFin)
        {
        bases+=t.info();
        tiempo+=t.Minutos;
        t=t.siguiente;
        }
        return bases;
    }
    }
    return false;
  }

  }

  let ruta= new Ruta;

  function Agregar(){

    let Nombre,Minutos;
    
    Nombre=document.getElementById("nombre").value;
    Minutos=document.getElementById("minutos").value;
    
    let minutos = parseFloat(Minutos);
    
    let pro=new Base(Nombre,minutos);
    
    ruta.Agregar(pro);
    
    document.getElementById("nombre").value="";
    document.getElementById("minutos").value="";
    }
    
    function Listar(){
    
        document.getElementById("lista").value="";
    
        let res=ruta.Imprimir();
    
        document.getElementById("lista").innerHTML=res;
    
    }
    
    function Eliminar(){
      let res="";
      let id=document.getElementById("textoabuscar").value;
      res=ruta.Eliminar(id);
      if (res==false) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          document.getElementById("resultado").innerHTML="Se eliminó correctamente";
    
    }
    }
    
    function Buscar(){
      let res="";
      let ID=document.getElementById("textoabuscar").value;
      res=ruta.Buscar(ID);
      if (res==null) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          document.getElementById("resultado").innerHTML="Se encontró <br>"+res.info();
      }
    }

    function Recorrido(){
      let res=null;
      let ID=document.getElementById("baseinicio").value;
      res=ruta.Buscar(ID);
      if (res==null) {
          document.getElementById("resultado").innerHTML="No se encontró nada";
      }else{
          horainicio2=document.getElementById("horainicio").value;
          horafin2=document.getElementById("horafin").value;
          horainicio1=parseFloat(horainicio2);
          horafin1=parseFloat(horafin2);

          rep=ruta.crearRecorrido(res,horainicio1,horafin1)

          document.getElementById("tarjeta").innerHTML=rep;
      }
    }