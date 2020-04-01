const conteudo = document.querySelectorAll(".Radius");
const output = document.getElementById("output");
const cubo = document.getElementById("cubo");
const copyB = document.getElementById('copiar');
let  lt = rt = lb = rb = 0;


for(let i =0; i < conteudo.length; i++){
    conteudo[i].addEventListener('input', function(){
        this.value = Number(this.value);
        
        if(this.value == "" || this.value == NaN){
            this.value = 0;
        }
        if (this.id == 'lt'){
            lt = this.value;
        } else if (this.id == 'rt'){
            rt = this.value;
        } else if (this.id == 'lb'){
            lb = this.value;
        } else if (this.id == 'rb'){
            rb = this.value;
        }

        cubo.style.borderRadius = `${lt}px ${rt}px ${lb}px ${rb}px`
        output.value = `${lt}px ${rt}px ${lb}px ${rb}px`;
    })
    conteudo[i].value = 0;
}

copyB.addEventListener('click', function(){
    output.select();
    document.execCommand("copy");
})
