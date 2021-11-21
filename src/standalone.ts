import { HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { OmsModule } from "@oms/oms.module";
import { OmsService } from "@oms/oms.service";

let service: OmsService;

const bootstrap = async () => {
  const appContext = await NestFactory.createApplicationContext(OmsModule);
  const service = appContext.get(OmsService);

  return service;
};

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const handler = service ?? (await bootstrap());
  const body = handler.getOrder();

  return {
    body: JSON.stringify(body),
    statusCode: HttpStatus.OK,
  };
};
