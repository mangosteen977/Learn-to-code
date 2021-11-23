let login_page = new Vue({
    el:"#logins",
    data:{
        views:true,
        views2:false,
        member_btn1:"회원가입",
        member_btn2:"아이디 찾기",
        member_btn3:"패스워드 찾기",
        mid:"",
        mpass:"",
        nid:"",
        nnum:"",
        npass:""
    },
    methods:{
        ops(vparts){
            if(vparts==1){
                this.views=true,
                this.views2=false
            }
            else{
                this.views=false,
                this.views2=true
            }
        },
        login_btn(type){
            switch(type){
                case 0:
                    if(!this.mid){
                        alert("아이디를 입력하세요");
                        this.$refs.mid.focus();
                    }
                    else if(!this.mpass){
                        alert("비밀번호를 입력하세요");
                        this.$refs.mpass.focus();
                    }
                    else{
                        alert(this.mid+"님 로그인 되었습니다.")
                    }
                break;
                case 1:
                    if(!this.nid){
                        alert("아이디를 입력하세요");
                        this.$refs.nid.focus();
                    }
                    else if(!this.nnum){
                        alert("사업자 번호를 입력하세요");
                        this.$refs.nnum.focus();
                    }
                    else if(isNaN(this.nnum)==true || this.nnum.length<11){
                        alert("올바른 사업자 번호를 입력하세요");
                        this.$refs.nnum.focus();
                    }
                    else if(!this.npass){
                        alert("비밀번호를 입력하세요");
                        this.$refs.npass.focus();
                    }
                    else{
                        alert(this.nid+"님 로그인 되었습니다.")
                    }
                break;
            }
        }
    }
});