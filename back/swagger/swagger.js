/**
 * Created by 희중 on 2020. 11. 03.
 */
"use strict";

module.exports = {
  swaggerDefinition: {
    // 정보
    info: {
      title: "imyourbox",
      version: "1.0.0",
      description: "아임유어박스 RestAPI 기본정의서입니다.",
    },
    // 주소
    host: "localhost:3000",
    // 기본 root path
    basePath: "/",
    contact: {
      email: "nok009@newatn.co.kr",
    },
    // 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
    components: {
      res: {
        BadRequest: {
          description: "잘못된 요청.",
          schema: {
            $ref: "#/components/errorResult/Error",
          },
        },
        Forbidden: {
          description: "권한이 없슴.",
          schema: {
            $ref: "#/components/errorResult/Error",
          },
        },
        NotFound: {
          description: "없는 리소스 요청.",
          schema: {
            $ref: "#/components/errorResult/Error",
          },
        },
      },
      errorResult: {
        Error: {
          type: "object",
          properties: {
            errMsg: {
              type: "string",
              description: "에러 메시지 전달.",
            },
          },
        },
      },
    },
    schemes: ["http", "https"], // 가능한 통신 방식
  },
  apis: ["./swagger/**/*.yml"], // api 파일 위치들
};
