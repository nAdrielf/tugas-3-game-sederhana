let ronde=0;
function main(){
    alert("silahkan bermain");
    let p1=0;
    let p2=0;
    for(i=0;i<5;i++){
        ronde++;
        randomNum=Math.floor(Math.random() * 3);
        confirm('ronde '+ronde);
        let guess1=prompt("#1 tebak angka");
        let guess2=prompt("#2 tebak angka");        
        if(guess1==guess2){
            alert("Tebakan tidak boleh sama");
        }else if(guess1<=1||guess2<=1,guess1>=4||guess2>=4){
            alert("Pilih Angka diantara 1 s/d 3");
            i++;
        }else if(guess1==randomNum){
            p1+=1;
            alert("#1 betul\n#1= "+p1+'\n   vs\n#2= '+p2);
        }else if(guess2==randomNum){
            p2+=1;
            alert("#2 betul\n#1= "+p1+'\n   vs\n#2= '+p2);
        }else{
            ("salah semua!");
        }
    }if(p1>p2){
        confirm('#1 menang dengan skor '+p1+'\n#2 kalah dengan skor '+p2);
    }else if(p2>p1){
        confirm('#2 menang dengan skor '+p2+'\n#1 kalah dengan skor '+p1);
    }else if(p1==p2){
        confirm('Seri\n#1= '+p1+' VS #2= '+p2);
    }
}