-- CreateTable
CREATE TABLE "prompts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "speech_type_id" INTEGER,
    "prompt_type_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" INTEGER NOT NULL DEFAULT 0,
    "deactivated_at" TIMESTAMP(3),
    "deactivated_by_user_id" INTEGER,

    CONSTRAINT "prompts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "speech_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "speech_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prompt_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "prompt_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by_user_id" INTEGER DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "updated_by_user_id" INTEGER NOT NULL DEFAULT 0,
    "deactivated_at" TIMESTAMP(3),
    "deactivated_by_user_id" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prompt_history" (
    "id" SERIAL NOT NULL,
    "prompt_id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prompt_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prompts_name_key" ON "prompts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "prompts" ADD CONSTRAINT "prompts_speech_type_id_fkey" FOREIGN KEY ("speech_type_id") REFERENCES "speech_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompts" ADD CONSTRAINT "prompts_prompt_type_id_fkey" FOREIGN KEY ("prompt_type_id") REFERENCES "prompt_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
