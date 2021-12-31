export default function(context, inject){
    inject('injector',{
        name: 'ali',
        loger(){
            console.log('name is =>>>>>>',this.name);
        }
    })
}