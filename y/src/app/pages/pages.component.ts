      console.log('一秒到了，该清空了');
      that.data = [];
      that.isShow = false;
      that.isShowAlert = true;
    }, 500);
  }
  
  test2() {
    this.data.pop();
    if (this.data.length === 0) {
      window.clearInterval(this.time);
      this.isShow = false;
    }
  }

  test3() {
    this.data = [
      {
        title: 'Ant Design Title 1'
      },
      {
       title: 'Ant Design Title 2'
      },
      {
        title: 'Ant Design Title 3'
      },
      {
        title: 'Ant Design Title 4'
      }
    ];
    this.data = [];
  }

  test4() {
    for (let i = 0; i < 100; ++i) {
      this.test3();
    }
  }

  constructor() { }

  ngOnInit() {
    //this.test4();
  }

}
