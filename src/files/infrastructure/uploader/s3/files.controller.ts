import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiTags } from '@nestjs/swagger'
import { FileResponseDto } from '~/files/infrastructure/uploader/local/dto/file-response.dto'
import { FilesS3Service } from '~/files/infrastructure/uploader/s3/files.service'

@ApiTags('Files')
@Controller({
    path: 'files',
    version: '1',
})
export class FilesS3Controller {
    constructor(private readonly filesService: FilesS3Service) {}

    @ApiCreatedResponse({
        type: FileResponseDto,
    })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @Post('upload')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.MulterS3.File): Promise<FileResponseDto> {
        return this.filesService.create(file)
    }
}
