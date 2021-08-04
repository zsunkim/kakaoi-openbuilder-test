import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStart() {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '안녕하세요(하하) \n하하하하하',
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
              ],
            },
          },
        ],
      },
    };
  }

  getTest() {
    return {
      version: '2.0',
      template: {
        outputs: [
          {
            simpleText: {
              text: '테스트 블록입니다.',
            },
          },
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
