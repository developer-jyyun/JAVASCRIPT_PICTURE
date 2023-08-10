
    // 올리기 버튼을 누르면 방금만든 제목, 내용, 가격 인풋에 입력한 정보 db저장
    document.getElementById("send").addEventListener("click", function(){

        //스토리지에 이미지 저장
        let file = document.querySelector('#image').files[0];
        const storageRef = storage.ref();
        let imgPath = storageRef.child('image/'+file.name);
        let upload = imgPath.put(file)

        //이미지 업로드 / 실패 확인
        upload.on( 'state_changed', 
          // 변화시 동작하는 함수 
          null, 
          //에러시 동작하는 함수
          (error) => {
            console.error('실패사유는', error);
          }, 
          // 성공시 동작하는 함수
          () => {
                  upload.snapshot.ref.getDownloadURL().then((url) => { //이미지 url 가져오기
                    console.log('업로드된 경로는', url);

                    const name =  document.getElementById("name").value;
                    const phone = document.getElementById("phone").value;
                    const email= document.getElementById("email").value;
                    const rank= document.getElementById("rank").value;
                    const memo =  document.getElementById("memo").value;


                    const saveData ={
                      이름 : name,
                      연락처 : phone,
                      이메일 : email,
                      직급 : rank,   
                      기타 : memo,   
                      이미지: url
                    }

                    console.log(name,phone,email,rank,memo)

                    db.collection('member').add(saveData).then((result)=>{
                      window.location.href="/index.html"
                      console.log(result)
                    }).catch((err)=>{
                      console.log(err)
                    });

                  });
          
                }
        );


    });

    // 올리기 버튼을 누르면 방금만든 제목, 내용, 가격 인풋에 입력한 정보 db저장
    document.getElementById("send").addEventListener("click", function(){

        //스토리지에 이미지 저장
        let file = document.querySelector('#image').files[0];
        const storageRef = storage.ref();
        let imgPath = storageRef.child('image/'+file.name);
        let upload = imgPath.put(file)

        //이미지 업로드 / 실패 확인
        upload.on( 'state_changed', 
          // 변화시 동작하는 함수 
          null, 
          //에러시 동작하는 함수
          (error) => {
            console.error('실패사유는', error);
          }, 
          // 성공시 동작하는 함수
          () => {
                  upload.snapshot.ref.getDownloadURL().then((url) => { //이미지 url 가져오기
                    console.log('업로드된 경로는', url);

                    const name =  document.getElementById("name").value;
                    const phone = document.getElementById("phone").value;
                    const email= document.getElementById("email").value;
                    const rank= document.getElementById("rank").value;
                    const memo =  document.getElementById("memo").value;


                    const saveData ={
                      이름 : name,
                      연락처 : phone,
                      이메일 : email,
                      직급 : rank,   
                      기타 : memo,   
                      이미지: url
                    }

                    console.log(name,phone,email,rank,memo)

                    db.collection('member').add(saveData).then((result)=>{
                      window.location.href="/index.html"
                      console.log(result)
                    }).catch((err)=>{
                      console.log(err)
                    });

                  });
          
                }
        );


    });