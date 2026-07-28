"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const helmet_1 = require("helmet");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = config.get('PORT', 4000);
    app.setGlobalPrefix('api/v1');
    app.use((0, helmet_1.default)());
    app.use(cookieParser());
    const allowedOrigins = new Set([
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        `http://localhost:${port}`,
        `http://127.0.0.1:${port}`,
        ...config.get('FRONTEND_URL', '')
            .split(',')
            .map((origin) => origin.trim().replace(/\/$/, ''))
            .filter(Boolean),
    ]);
    app.enableCors({
        origin(origin, callback) {
            if (!origin || allowedOrigins.has(origin.replace(/\/$/, '')))
                return callback(null, true);
            return callback(new Error('Origen no permitido por CORS'), false);
        },
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
    const swaggerConfig = new swagger_1.DocumentBuilder().setTitle('NutriCare API').setDescription('API de gestión nutricional').setVersion('1.0').addBearerAuth().build();
    swagger_1.SwaggerModule.setup('docs', app, swagger_1.SwaggerModule.createDocument(app, swaggerConfig));
    await app.listen(port, '0.0.0.0');
}
bootstrap().catch((error) => {
    console.error('No se pudo iniciar NutriCare API:', error);
    process.exitCode = 1;
});
//# sourceMappingURL=main.js.map