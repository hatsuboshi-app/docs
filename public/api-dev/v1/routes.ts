/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SupportCardController } from './../../controllers/v1/SupportCard.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SkillController } from './../../controllers/v1/Skill.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PItemController } from './../../controllers/v1/PItem.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PIdolController } from './../../controllers/v1/PIdol.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PDrinkController } from './../../controllers/v1/PDrink.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CharacterController } from './../../controllers/v1/Character.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuditionTerminologyController } from './../../controllers/v1/AuditionTerminology.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuditionEffectController } from './../../controllers/v1/AuditionEffect.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ISupportCard": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_ISupportCard_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ISupportCard"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorResponse_400_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"details":{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"}},"message":{"dataType":"string","required":true},"status":{"dataType":"enum","enums":[400],"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorResponse_500_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"details":{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"}},"message":{"dataType":"string","required":true},"status":{"dataType":"enum","enums":[500],"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorResponse_404_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"details":{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"any"}},"message":{"dataType":"string","required":true},"status":{"dataType":"enum","enums":[404],"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nullable_string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LocaleString": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"en":{"ref":"Nullable_string_","required":true},"ja":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LocaleStringWithRomaji": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"LocaleString"},{"dataType":"nestedObjectLiteral","nestedProperties":{"ro":{"ref":"Nullable_string_","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Plan": {
        "dataType": "refEnum",
        "enums": ["free","logic","sense","anomaly"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SkillRarity": {
        "dataType": "refEnum",
        "enums": ["n","r","r+","sr","sr+","ssr","legend"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SkillCategory": {
        "dataType": "refEnum",
        "enums": ["active","mental","trouble"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SkillSource": {
        "dataType": "refEnum",
        "enums": ["pIdol","supportCard","basic","other"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.Enhance": {
        "dataType": "refEnum",
        "enums": [0],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EnhanceEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"double","required":true},"var":{"dataType":"string","required":true},"type":{"ref":"EffectModType.Enhance","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectReferenceType": {
        "dataType": "refEnum",
        "enums": [0,1,2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuditionIconColor": {
        "dataType": "refEnum",
        "enums": ["blue","green","red","yellow","confident","preserve","fullPower"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuditionIconShape": {
        "dataType": "refEnum",
        "enums": ["diamond","circle"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuditionIcon": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"iconScale":{"dataType":"double","required":true},"iconAssetId":{"dataType":"string","required":true},"shape":{"ref":"AuditionIconShape","required":true},"color":{"ref":"AuditionIconColor","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nullable_AuditionIcon_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"AuditionIcon"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEffectReference": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "refId": {"dataType":"string","required":true},
            "refType": {"ref":"EffectReferenceType","required":true},
            "isHighlighted": {"dataType":"boolean","required":true},
            "icon": {"ref":"Nullable_AuditionIcon_","required":true},
            "name": {"ref":"LocaleString","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectVariable": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"double","required":true},"id":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEffectLine": {
        "dataType": "refObject",
        "properties": {
            "position": {"dataType":"double","required":true},
            "body": {"ref":"LocaleString","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEffect": {
        "dataType": "refObject",
        "properties": {
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "lines": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectLine"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuditionEffect": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleString","required":true},
            "description": {"ref":"IEffect","required":true},
            "icon": {"ref":"AuditionIcon","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nullable_IAuditionEffect_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IAuditionEffect"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillEffectLine": {
        "dataType": "refObject",
        "properties": {
            "position": {"dataType":"double","required":true},
            "body": {"ref":"LocaleString","required":true},
            "effectIcon": {"ref":"Nullable_IAuditionEffect_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.Insert": {
        "dataType": "refEnum",
        "enums": [1],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IInsertSkillEffectMod": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"EffectModType.Insert","required":true},
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "line": {"ref":"ISkillEffectLine","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.Replace": {
        "dataType": "refEnum",
        "enums": [2],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IReplaceSkillEffectMod": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"EffectModType.Replace","required":true},
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "line": {"ref":"ISkillEffectLine","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.ModifyFlag": {
        "dataType": "refEnum",
        "enums": [3],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_SkillFlags_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isUnique":{"dataType":"boolean"},"isOnceOnly":{"dataType":"boolean"},"isInitial":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChangeFlagSkillEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"flags":{"ref":"Partial_SkillFlags_","required":true},"type":{"ref":"EffectModType.ModifyFlag","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.CostReduce": {
        "dataType": "refEnum",
        "enums": [4],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CostReduceSkillEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"double","required":true},"type":{"ref":"EffectModType.CostReduce","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EffectModType.CustomizeLimitIncrease": {
        "dataType": "refEnum",
        "enums": [5],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomizeLimitIncreaseSkillEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"double","required":true},"type":{"ref":"EffectModType.CustomizeLimitIncrease","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"EnhanceEffectMod"},{"ref":"IInsertSkillEffectMod"},{"ref":"IReplaceSkillEffectMod"},{"ref":"ChangeFlagSkillEffectMod"},{"ref":"CostReduceSkillEffectMod"},{"ref":"CustomizeLimitIncreaseSkillEffectMod"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillUpgradeLevelEffect": {
        "dataType": "refObject",
        "properties": {
            "level": {"dataType":"double","required":true},
            "mods": {"dataType":"array","array":{"dataType":"refAlias","ref":"ISkillEffectMod"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillCustomizeLevelEffect": {
        "dataType": "refObject",
        "properties": {
            "level": {"dataType":"double","required":true},
            "cost": {"dataType":"double","required":true},
            "mods": {"dataType":"array","array":{"dataType":"refAlias","ref":"ISkillEffectMod"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillCustomize": {
        "dataType": "refObject",
        "properties": {
            "position": {"dataType":"double","required":true},
            "levels": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkillCustomizeLevelEffect"},"required":true},
            "typeRefId": {"dataType":"string","required":true},
            "description": {"ref":"LocaleString","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkillEffect": {
        "dataType": "refObject",
        "properties": {
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "lines": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkillEffectLine"},"required":true},
            "customizedVars": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "customizedLines": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "energyGainVar": {"ref":"Nullable_string_","required":true},
            "scoreGainVar": {"ref":"Nullable_string_","required":true},
            "scoreGainMultiplier": {"ref":"Nullable_string_","required":true},
            "costRef": {"ref":"Nullable_string_","required":true},
            "costVar": {"ref":"Nullable_string_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SkillFlags": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"isInitial":{"dataType":"boolean","required":true},"isOnceOnly":{"dataType":"boolean","required":true},"isUnique":{"dataType":"boolean","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ISkill": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleStringWithRomaji","required":true},
            "assetUrl": {"dataType":"string","required":true},
            "plan": {"ref":"Plan","required":true},
            "rarity": {"ref":"SkillRarity","required":true},
            "category": {"ref":"SkillCategory","required":true},
            "source": {"ref":"SkillSource","required":true},
            "unlockLevel": {"dataType":"double","required":true},
            "upgradeLevels": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkillUpgradeLevelEffect"},"required":true},
            "customizeOptions": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkillCustomize"},"required":true},
            "initialCustomizeLimit": {"dataType":"double","required":true},
            "initialStaminaCost": {"dataType":"double","required":true},
            "initialEffect": {"ref":"ISkillEffect","required":true},
            "initialFlags": {"ref":"SkillFlags","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_ISkill_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkill"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Rarity": {
        "dataType": "refEnum",
        "enums": ["r","sr","ssr"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PItemSource": {
        "dataType": "refEnum",
        "enums": ["pIdol","supportCard","other"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IInsertEffectMod": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"EffectModType.Insert","required":true},
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "line": {"ref":"IEffectLine","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IReplaceEffectMod": {
        "dataType": "refObject",
        "properties": {
            "type": {"ref":"EffectModType.Replace","required":true},
            "refs": {"dataType":"array","array":{"dataType":"refObject","ref":"IEffectReference"},"required":true},
            "vars": {"dataType":"array","array":{"dataType":"refAlias","ref":"EffectVariable"},"required":true},
            "line": {"ref":"IEffectLine","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IEffectMod": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"EnhanceEffectMod"},{"ref":"IInsertEffectMod"},{"ref":"IReplaceEffectMod"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAbilityLevel": {
        "dataType": "refObject",
        "properties": {
            "level": {"dataType":"double","required":true},
            "mods": {"dataType":"array","array":{"dataType":"refAlias","ref":"IEffectMod"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPItem": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleStringWithRomaji","required":true},
            "assetUrl": {"dataType":"string","required":true},
            "plan": {"ref":"Plan","required":true},
            "rarity": {"ref":"Rarity","required":true},
            "source": {"ref":"PItemSource","required":true},
            "unlockLevel": {"dataType":"double","required":true},
            "initialEffect": {"ref":"IEffect","required":true},
            "upgradeLevels": {"dataType":"array","array":{"dataType":"refObject","ref":"IAbilityLevel"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_IPItem_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"IPItem"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolAssetSet": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"fullAssetUrl":{"dataType":"string","required":true},"thumbnailAssetUrl":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolVisualSet": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"idolized":{"ref":"PIdolAssetSet","required":true},"regular":{"ref":"PIdolAssetSet","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolAnotherVisualSet": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"PIdolVisualSet"},{"dataType":"nestedObjectLiteral","nestedProperties":{"description":{"ref":"LocaleString","required":true},"name":{"ref":"LocaleString","required":true},"order":{"dataType":"double","required":true},"id":{"dataType":"string","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolVisual": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"another":{"dataType":"array","array":{"dataType":"refAlias","ref":"PIdolAnotherVisualSet"},"required":true},"default":{"ref":"PIdolVisualSet","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CharacterColor": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"label":{"dataType":"string","required":true},"text":{"dataType":"string","required":true},"gradient2":{"dataType":"string","required":true},"gradient1":{"dataType":"string","required":true},"main":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CharacterDetail": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"introduction":{"ref":"LocaleString","required":true},"hobby":{"ref":"LocaleString","required":true},"specialSkill":{"ref":"LocaleString","required":true},"birthplace":{"ref":"LocaleString","required":true},"dominantHand":{"ref":"LocaleString","required":true},"cv":{"ref":"LocaleString","required":true},"zodiacSign":{"ref":"LocaleString","required":true},"bloodType":{"ref":"LocaleString","required":true},"grade":{"ref":"LocaleString","required":true},"birthday":{"dataType":"nestedObjectLiteral","nestedProperties":{"day":{"dataType":"double","required":true},"month":{"dataType":"double","required":true}},"required":true},"age":{"dataType":"double","required":true},"threeSizes":{"dataType":"tuple","required":true},"weight":{"dataType":"double","required":true},"height":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProduceScenario": {
        "dataType": "refEnum",
        "enums": ["hajime","nia","hif"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ParameterSet": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"vi":{"dataType":"double","required":true},"da":{"dataType":"double","required":true},"vo":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CharacterTrueEndBonus": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"stamina":{"dataType":"double","required":true},"growth":{"ref":"ParameterSet","required":true},"parameter":{"ref":"ParameterSet","required":true},"scenario":{"ref":"ProduceScenario","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ICharacter": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "firstName": {"ref":"LocaleString","required":true},
            "lastName": {"ref":"LocaleString","required":true},
            "isPlayable": {"dataType":"boolean","required":true},
            "color": {"ref":"CharacterColor","required":true},
            "assetUrl": {"dataType":"string","required":true},
            "detail": {"ref":"CharacterDetail","required":true},
            "trueEndBonuses": {"dataType":"array","array":{"dataType":"refAlias","ref":"CharacterTrueEndBonus"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolPlan": {
        "dataType": "refEnum",
        "enums": ["logic","sense","anomaly"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PIdolSubplan": {
        "dataType": "refEnum",
        "enums": ["impression","motivation","goodShape","focus","confident","preserve","fullPower"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AbilityIconColor": {
        "dataType": "refEnum",
        "enums": ["blue","green","vo","da","vi"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AbilityIcon": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"iconScale":{"dataType":"double","required":true},"iconAssetId":{"dataType":"string","required":true},"color":{"ref":"AbilityIconColor","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAbility": {
        "dataType": "refObject",
        "properties": {
            "icon": {"ref":"AbilityIcon","required":true},
            "position": {"dataType":"double","required":true},
            "initialEffect": {"ref":"IEffect","required":true},
            "levels": {"dataType":"array","array":{"dataType":"refObject","ref":"IAbilityLevel"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_PIdolLevelEffectTriggers_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"visualUpgrade":{"dataType":"boolean"},"altOutfitUnlock":{"dataType":"boolean"},"skillCustomizeUnlock":{"dataType":"boolean"},"skillUpgrade":{"dataType":"boolean"},"skill2Upgrade":{"dataType":"boolean"},"pItemUpgrade":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPIdolLevelEffect": {
        "dataType": "refObject",
        "properties": {
            "level": {"dataType":"double","required":true},
            "parameter": {"ref":"ParameterSet","required":true},
            "growth": {"ref":"ParameterSet","required":true},
            "stamina": {"dataType":"double","required":true},
            "triggers": {"ref":"Partial_PIdolLevelEffectTriggers_","required":true},
            "abilityUpgradePositions": {"dataType":"array","array":{"dataType":"double"},"required":true},
            "abilities": {"dataType":"array","array":{"dataType":"refObject","ref":"IAbility"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPrimaStellaUpgrade": {
        "dataType": "refObject",
        "properties": {
            "skill": {"ref":"ISkill","required":true},
            "ability": {"ref":"IAbility","required":true},
            "visual": {"ref":"PIdolVisualSet","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nullable_IPrimaStellaUpgrade_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"IPrimaStellaUpgrade"},{"dataType":"enum","enums":[null]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPIdol": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleStringWithRomaji","required":true},
            "visual": {"ref":"PIdolVisual","required":true},
            "character": {"ref":"ICharacter","required":true},
            "rarity": {"ref":"Rarity","required":true},
            "plan": {"ref":"PIdolPlan","required":true},
            "subplan": {"ref":"PIdolSubplan","required":true},
            "isWelfare": {"dataType":"boolean","required":true},
            "signatureSkill": {"dataType":"array","array":{"dataType":"refObject","ref":"ISkill"},"required":true},
            "signaturePItem": {"ref":"IPItem","required":true},
            "initialStamina": {"dataType":"double","required":true},
            "initialParameter": {"ref":"ParameterSet","required":true},
            "initialGrowth": {"ref":"ParameterSet","required":true},
            "initialAbilities": {"dataType":"array","array":{"dataType":"refObject","ref":"IAbility"},"required":true},
            "trainingLevels": {"dataType":"array","array":{"dataType":"refObject","ref":"IPIdolLevelEffect"},"required":true},
            "potentialLevels": {"dataType":"array","array":{"dataType":"refObject","ref":"IPIdolLevelEffect"},"required":true},
            "primaStellaUpgrade": {"ref":"Nullable_IPrimaStellaUpgrade_","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_IPIdol_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"IPIdol"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPDrink": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleStringWithRomaji","required":true},
            "assetUrl": {"dataType":"string","required":true},
            "plan": {"ref":"Plan","required":true},
            "rarity": {"ref":"Rarity","required":true},
            "unlockLevel": {"dataType":"double","required":true},
            "effect": {"ref":"IEffect","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_IPDrink_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"IPDrink"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_ICharacter_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"ICharacter"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IAuditionTerminology": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "createdAt": {"dataType":"string","required":true},
            "updatedAt": {"dataType":"string","required":true},
            "name": {"ref":"LocaleString","required":true},
            "description": {"ref":"IEffect","required":true},
            "isHighlighted": {"dataType":"boolean","required":true},
            "icon": {"dataType":"union","subSchemas":[{"ref":"AuditionIcon"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_IAuditionTerminology_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"IAuditionTerminology"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IPaginator_IAuditionEffect_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"IAuditionEffect"},"required":true},
            "meta": {"dataType":"nestedObjectLiteral","nestedProperties":{"totalPages":{"dataType":"double","required":true},"totalItems":{"dataType":"double","required":true},"pageSize":{"dataType":"double","required":true},"currentPage":{"dataType":"double","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsSupportCardController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/support-cards',
            ...(fetchMiddlewares<RequestHandler>(SupportCardController)),
            ...(fetchMiddlewares<RequestHandler>(SupportCardController.prototype.getMany)),

            async function SupportCardController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSupportCardController_getMany, request, response });

                const controller = new SupportCardController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsSupportCardController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/support-cards/:id',
            ...(fetchMiddlewares<RequestHandler>(SupportCardController)),
            ...(fetchMiddlewares<RequestHandler>(SupportCardController.prototype.getOneById)),

            async function SupportCardController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSupportCardController_getOneById, request, response });

                const controller = new SupportCardController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsSkillController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/skills',
            ...(fetchMiddlewares<RequestHandler>(SkillController)),
            ...(fetchMiddlewares<RequestHandler>(SkillController.prototype.getMany)),

            async function SkillController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSkillController_getMany, request, response });

                const controller = new SkillController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsSkillController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/skills/:id',
            ...(fetchMiddlewares<RequestHandler>(SkillController)),
            ...(fetchMiddlewares<RequestHandler>(SkillController.prototype.getOneById)),

            async function SkillController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsSkillController_getOneById, request, response });

                const controller = new SkillController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPItemController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/p-items',
            ...(fetchMiddlewares<RequestHandler>(PItemController)),
            ...(fetchMiddlewares<RequestHandler>(PItemController.prototype.getMany)),

            async function PItemController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPItemController_getMany, request, response });

                const controller = new PItemController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPItemController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/p-items/:id',
            ...(fetchMiddlewares<RequestHandler>(PItemController)),
            ...(fetchMiddlewares<RequestHandler>(PItemController.prototype.getOneById)),

            async function PItemController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPItemController_getOneById, request, response });

                const controller = new PItemController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPIdolController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/p-idols',
            ...(fetchMiddlewares<RequestHandler>(PIdolController)),
            ...(fetchMiddlewares<RequestHandler>(PIdolController.prototype.getMany)),

            async function PIdolController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPIdolController_getMany, request, response });

                const controller = new PIdolController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPIdolController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/p-idols/:id',
            ...(fetchMiddlewares<RequestHandler>(PIdolController)),
            ...(fetchMiddlewares<RequestHandler>(PIdolController.prototype.getOneById)),

            async function PIdolController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPIdolController_getOneById, request, response });

                const controller = new PIdolController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPDrinkController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/p-drinks',
            ...(fetchMiddlewares<RequestHandler>(PDrinkController)),
            ...(fetchMiddlewares<RequestHandler>(PDrinkController.prototype.getMany)),

            async function PDrinkController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPDrinkController_getMany, request, response });

                const controller = new PDrinkController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsPDrinkController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/p-drinks/:id',
            ...(fetchMiddlewares<RequestHandler>(PDrinkController)),
            ...(fetchMiddlewares<RequestHandler>(PDrinkController.prototype.getOneById)),

            async function PDrinkController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsPDrinkController_getOneById, request, response });

                const controller = new PDrinkController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCharacterController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/characters',
            ...(fetchMiddlewares<RequestHandler>(CharacterController)),
            ...(fetchMiddlewares<RequestHandler>(CharacterController.prototype.getMany)),

            async function CharacterController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCharacterController_getMany, request, response });

                const controller = new CharacterController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsCharacterController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/characters/:id',
            ...(fetchMiddlewares<RequestHandler>(CharacterController)),
            ...(fetchMiddlewares<RequestHandler>(CharacterController.prototype.getOneById)),

            async function CharacterController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsCharacterController_getOneById, request, response });

                const controller = new CharacterController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuditionTerminologyController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/terminologies',
            ...(fetchMiddlewares<RequestHandler>(AuditionTerminologyController)),
            ...(fetchMiddlewares<RequestHandler>(AuditionTerminologyController.prototype.getMany)),

            async function AuditionTerminologyController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuditionTerminologyController_getMany, request, response });

                const controller = new AuditionTerminologyController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuditionTerminologyController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/terminologies/:id',
            ...(fetchMiddlewares<RequestHandler>(AuditionTerminologyController)),
            ...(fetchMiddlewares<RequestHandler>(AuditionTerminologyController.prototype.getOneById)),

            async function AuditionTerminologyController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuditionTerminologyController_getOneById, request, response });

                const controller = new AuditionTerminologyController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuditionEffectController_getMany: Record<string, TsoaRoute.ParameterSchema> = {
                p: {"in":"query","name":"p","dataType":"double"},
                pp: {"in":"query","name":"pp","dataType":"double"},
                f: {"in":"query","name":"f","dataType":"string"},
                s: {"in":"query","name":"s","dataType":"string"},
        };
        app.get('/effects',
            ...(fetchMiddlewares<RequestHandler>(AuditionEffectController)),
            ...(fetchMiddlewares<RequestHandler>(AuditionEffectController.prototype.getMany)),

            async function AuditionEffectController_getMany(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuditionEffectController_getMany, request, response });

                const controller = new AuditionEffectController();

              await templateService.apiHandler({
                methodName: 'getMany',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuditionEffectController_getOneById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/effects/:id',
            ...(fetchMiddlewares<RequestHandler>(AuditionEffectController)),
            ...(fetchMiddlewares<RequestHandler>(AuditionEffectController.prototype.getOneById)),

            async function AuditionEffectController_getOneById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuditionEffectController_getOneById, request, response });

                const controller = new AuditionEffectController();

              await templateService.apiHandler({
                methodName: 'getOneById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
