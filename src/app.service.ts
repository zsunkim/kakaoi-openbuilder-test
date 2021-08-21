import { Injectable } from '@nestjs/common';
import { Items, SimpleText } from './templates/item-card.template';


@Injectable()
export class AppService {
  // 시작 블록
  getStart() {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '안녕하세요(하하) \n쇼핑봇입니다.\n\n저는 이런 것 들을 도와드릴 수 있어요!\n\n\[챗봇 서비스 이용 안내\]\n핫핑의 원활한 상담을 위해 챗봇과의 대화 내용은 상담원에게 전달될 수 있으며, 챗봇 품질 관리를 위해 \♥루나소프트\♥에 저장됩니다. 채팅을 원치 않으시면 \"\!굿바이\"를 입력해주세요.(카톡)',
            },
          },
          {
            carousel: {
              type: 'basicCard',
              items: [
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '심쿵상품 알림받기',
                      messageText: '심쿵상품 알림받기',
                      extra: {
                        products : [
                          {
                            productName: '시크릿 레이스바디수트[66~99]1111',
                            productPrice: 13800,
                            imageUrl:
                            'https://www.hotping.co.kr/web/product/big/202011/7f3470c215182a31cc78483390741f5a.jpg',
                            productDetailUrl:
                            'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                            productName: '활용도좋은 폴라티셔츠[44~100]1111',
                            productPrice: 9800,
                            imageUrl:
                            'https://www.hotping.co.kr/web/product/big/202012/0277ce64aa57b7feff90d0e661156744.jpg',
                            productDetailUrl:
                            'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '피플즈_바지 투피스세트[44~100]1111',
                          productPrice: 19800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202010/b69a475f3a34b37af6614582250c5393.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '시크릿 레이스바디수트2222',
                          productPrice: 13800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202011/7f3470c215182a31cc78483390741f5a.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '활용도좋은 폴라티셔츠2222',
                          productPrice: 9800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202012/0277ce64aa57b7feff90d0e661156744.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '피플즈_바지 투피스세트22222',
                          productPrice: 19800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202010/b69a475f3a34b37af6614582250c5393.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '시크릿 레이스바디수트3333',
                          productPrice: 13800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202011/7f3470c215182a31cc78483390741f5a.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '활용도좋은 폴라티셔츠3333',
                          productPrice: 9800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202012/0277ce64aa57b7feff90d0e661156744.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          },
                          {
                          productName: '피플즈_바지 투피스세트3333',
                          productPrice: 19800,
                          imageUrl:
                          'https://www.hotping.co.kr/web/product/big/202010/b69a475f3a34b37af6614582250c5393.jpg',
                          productDetailUrl:
                          'https://www.hotping.co.kr/product/detail.html?product_no=30434',
                          }
                        ],
                    }
                    }
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '배송조회 문의',
                      messageText: '배송조회 문의',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '교환/반품 문의',
                      messageText: '교환/반품 문의',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '주문취소/변경 문의',
                      messageText: '주문취소/변경 문의',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '결제 문의',
                      messageText: '결제 문의',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '상품 문의',
                      messageText: '상품 문의',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '나에게 맞춤상품 추천',
                      messageText: '나에게 맞춤상품 추천',
                    },
                  ],
                },
                {
                  thumbnail: {
                    imageUrl:
                      'http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg',
                  },
                  buttons: [
                    {
                      action: 'message',
                      label: '쇼핑몰 바로가기',
                      messageText: '쇼핑몰 바로가기',
                    },
                  ],
                },

              ]
            }
          }
        ]
      }
    };
  }

  getTest() {
    return {
      "version": "2.0",
      "context": {
        "values": [
          {
            "name": "abc",
            "lifeSpan": 10,
            "params": {
              "key1": "val1",
              "key2": "val2"
            }
          },
          {
            "name": "def",
            "lifeSpan": 5,
            "params": {
              "key3": "1",
              "key4": "true",
              "key5": "{\"jsonKey\": \"jsonVal\"}"
            }
          },
          {
            "name": "ghi",
            "lifeSpan": 0
          }
        ]
      }
    }
  }
  

  // 상품 추천
  getProduct(extras) {
    // console.log(extras['products']);
    const extra = extras['products'];

    let str: Items[] = [];
    for(let i=0; i<extra.length; i++) {
      str.push({
        imageTitle: {
          title: extra[i].productPrice
        },
        title: extra[i].productName,
        itemList: [{
          title: extra[i].productName
        }],
        thumbnail: {
          imageUrl: extra[i].imageUrl
        },
        profile: {
          title: '쇼핑몰'
        },
        buttons: [{
          label: "상품 상세보기",
          action: "webLink",
          webLinkUrl: extra[i].productDetailUrl
        },{
          label: "상담원 연결",
          action: "message",
          messageText: "상담원 연결"
        }]
      });
      
    }

    
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '앗! 배송조회 가능한 주문건이 없습니다. \n\n이런 상품은 어떠세요?',
            },
          },
          {
            carousel: {
              type: 'itemCard',
              items: str
            }
          }
        ],
      },
    };
  }

  getEnd() {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '끝 블록입니다.',
            },
          },
          
        ],
      },
    };
  }
}
