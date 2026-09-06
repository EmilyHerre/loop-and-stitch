import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatternMaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$PatternMaterialPayload>;
export type AggregatePatternMaterial = {
    _count: PatternMaterialCountAggregateOutputType | null;
    _avg: PatternMaterialAvgAggregateOutputType | null;
    _sum: PatternMaterialSumAggregateOutputType | null;
    _min: PatternMaterialMinAggregateOutputType | null;
    _max: PatternMaterialMaxAggregateOutputType | null;
};
export type PatternMaterialAvgAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    materialId: number | null;
    quantity: number | null;
};
export type PatternMaterialSumAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    materialId: number | null;
    quantity: number | null;
};
export type PatternMaterialMinAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    materialId: number | null;
    color: string | null;
    quantity: number | null;
};
export type PatternMaterialMaxAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    materialId: number | null;
    color: string | null;
    quantity: number | null;
};
export type PatternMaterialCountAggregateOutputType = {
    id: number;
    patternId: number;
    materialId: number;
    color: number;
    quantity: number;
    _all: number;
};
export type PatternMaterialAvgAggregateInputType = {
    id?: true;
    patternId?: true;
    materialId?: true;
    quantity?: true;
};
export type PatternMaterialSumAggregateInputType = {
    id?: true;
    patternId?: true;
    materialId?: true;
    quantity?: true;
};
export type PatternMaterialMinAggregateInputType = {
    id?: true;
    patternId?: true;
    materialId?: true;
    color?: true;
    quantity?: true;
};
export type PatternMaterialMaxAggregateInputType = {
    id?: true;
    patternId?: true;
    materialId?: true;
    color?: true;
    quantity?: true;
};
export type PatternMaterialCountAggregateInputType = {
    id?: true;
    patternId?: true;
    materialId?: true;
    color?: true;
    quantity?: true;
    _all?: true;
};
export type PatternMaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatternMaterialCountAggregateInputType;
    _avg?: PatternMaterialAvgAggregateInputType;
    _sum?: PatternMaterialSumAggregateInputType;
    _min?: PatternMaterialMinAggregateInputType;
    _max?: PatternMaterialMaxAggregateInputType;
};
export type GetPatternMaterialAggregateType<T extends PatternMaterialAggregateArgs> = {
    [P in keyof T & keyof AggregatePatternMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatternMaterial[P]> : Prisma.GetScalarType<T[P], AggregatePatternMaterial[P]>;
};
export type PatternMaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithAggregationInput | Prisma.PatternMaterialOrderByWithAggregationInput[];
    by: Prisma.PatternMaterialScalarFieldEnum[] | Prisma.PatternMaterialScalarFieldEnum;
    having?: Prisma.PatternMaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatternMaterialCountAggregateInputType | true;
    _avg?: PatternMaterialAvgAggregateInputType;
    _sum?: PatternMaterialSumAggregateInputType;
    _min?: PatternMaterialMinAggregateInputType;
    _max?: PatternMaterialMaxAggregateInputType;
};
export type PatternMaterialGroupByOutputType = {
    id: number;
    patternId: number;
    materialId: number;
    color: string | null;
    quantity: number;
    _count: PatternMaterialCountAggregateOutputType | null;
    _avg: PatternMaterialAvgAggregateOutputType | null;
    _sum: PatternMaterialSumAggregateOutputType | null;
    _min: PatternMaterialMinAggregateOutputType | null;
    _max: PatternMaterialMaxAggregateOutputType | null;
};
export type GetPatternMaterialGroupByPayload<T extends PatternMaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatternMaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatternMaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatternMaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatternMaterialGroupByOutputType[P]>;
}>>;
export type PatternMaterialWhereInput = {
    AND?: Prisma.PatternMaterialWhereInput | Prisma.PatternMaterialWhereInput[];
    OR?: Prisma.PatternMaterialWhereInput[];
    NOT?: Prisma.PatternMaterialWhereInput | Prisma.PatternMaterialWhereInput[];
    id?: Prisma.IntFilter<"PatternMaterial"> | number;
    patternId?: Prisma.IntFilter<"PatternMaterial"> | number;
    materialId?: Prisma.IntFilter<"PatternMaterial"> | number;
    color?: Prisma.StringNullableFilter<"PatternMaterial"> | string | null;
    quantity?: Prisma.FloatFilter<"PatternMaterial"> | number;
    pattern?: Prisma.XOR<Prisma.PatternScalarRelationFilter, Prisma.PatternWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type PatternMaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    pattern?: Prisma.PatternOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type PatternMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    patternId_materialId_color?: Prisma.PatternMaterialPatternIdMaterialIdColorCompoundUniqueInput;
    AND?: Prisma.PatternMaterialWhereInput | Prisma.PatternMaterialWhereInput[];
    OR?: Prisma.PatternMaterialWhereInput[];
    NOT?: Prisma.PatternMaterialWhereInput | Prisma.PatternMaterialWhereInput[];
    patternId?: Prisma.IntFilter<"PatternMaterial"> | number;
    materialId?: Prisma.IntFilter<"PatternMaterial"> | number;
    color?: Prisma.StringNullableFilter<"PatternMaterial"> | string | null;
    quantity?: Prisma.FloatFilter<"PatternMaterial"> | number;
    pattern?: Prisma.XOR<Prisma.PatternScalarRelationFilter, Prisma.PatternWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id" | "patternId_materialId_color">;
export type PatternMaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    color?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    _count?: Prisma.PatternMaterialCountOrderByAggregateInput;
    _avg?: Prisma.PatternMaterialAvgOrderByAggregateInput;
    _max?: Prisma.PatternMaterialMaxOrderByAggregateInput;
    _min?: Prisma.PatternMaterialMinOrderByAggregateInput;
    _sum?: Prisma.PatternMaterialSumOrderByAggregateInput;
};
export type PatternMaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatternMaterialScalarWhereWithAggregatesInput | Prisma.PatternMaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatternMaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatternMaterialScalarWhereWithAggregatesInput | Prisma.PatternMaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PatternMaterial"> | number;
    patternId?: Prisma.IntWithAggregatesFilter<"PatternMaterial"> | number;
    materialId?: Prisma.IntWithAggregatesFilter<"PatternMaterial"> | number;
    color?: Prisma.StringNullableWithAggregatesFilter<"PatternMaterial"> | string | null;
    quantity?: Prisma.FloatWithAggregatesFilter<"PatternMaterial"> | number;
};
export type PatternMaterialCreateInput = {
    color?: string | null;
    quantity: number;
    pattern: Prisma.PatternCreateNestedOneWithoutMaterialsInput;
    material: Prisma.MaterialCreateNestedOneWithoutPatternsInput;
};
export type PatternMaterialUncheckedCreateInput = {
    id?: number;
    patternId: number;
    materialId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialUpdateInput = {
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pattern?: Prisma.PatternUpdateOneRequiredWithoutMaterialsNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutPatternsNestedInput;
};
export type PatternMaterialUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    materialId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialCreateManyInput = {
    id?: number;
    patternId: number;
    materialId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialUpdateManyMutationInput = {
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    materialId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialListRelationFilter = {
    every?: Prisma.PatternMaterialWhereInput;
    some?: Prisma.PatternMaterialWhereInput;
    none?: Prisma.PatternMaterialWhereInput;
};
export type PatternMaterialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatternMaterialPatternIdMaterialIdColorCompoundUniqueInput = {
    patternId: number;
    materialId: number;
    color: string;
};
export type PatternMaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type PatternMaterialAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type PatternMaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type PatternMaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type PatternMaterialSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type PatternMaterialCreateNestedManyWithoutPatternInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput> | Prisma.PatternMaterialCreateWithoutPatternInput[] | Prisma.PatternMaterialUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutPatternInput | Prisma.PatternMaterialCreateOrConnectWithoutPatternInput[];
    createMany?: Prisma.PatternMaterialCreateManyPatternInputEnvelope;
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
};
export type PatternMaterialUncheckedCreateNestedManyWithoutPatternInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput> | Prisma.PatternMaterialCreateWithoutPatternInput[] | Prisma.PatternMaterialUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutPatternInput | Prisma.PatternMaterialCreateOrConnectWithoutPatternInput[];
    createMany?: Prisma.PatternMaterialCreateManyPatternInputEnvelope;
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
};
export type PatternMaterialUpdateManyWithoutPatternNestedInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput> | Prisma.PatternMaterialCreateWithoutPatternInput[] | Prisma.PatternMaterialUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutPatternInput | Prisma.PatternMaterialCreateOrConnectWithoutPatternInput[];
    upsert?: Prisma.PatternMaterialUpsertWithWhereUniqueWithoutPatternInput | Prisma.PatternMaterialUpsertWithWhereUniqueWithoutPatternInput[];
    createMany?: Prisma.PatternMaterialCreateManyPatternInputEnvelope;
    set?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    disconnect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    delete?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    update?: Prisma.PatternMaterialUpdateWithWhereUniqueWithoutPatternInput | Prisma.PatternMaterialUpdateWithWhereUniqueWithoutPatternInput[];
    updateMany?: Prisma.PatternMaterialUpdateManyWithWhereWithoutPatternInput | Prisma.PatternMaterialUpdateManyWithWhereWithoutPatternInput[];
    deleteMany?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
};
export type PatternMaterialUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput> | Prisma.PatternMaterialCreateWithoutPatternInput[] | Prisma.PatternMaterialUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutPatternInput | Prisma.PatternMaterialCreateOrConnectWithoutPatternInput[];
    upsert?: Prisma.PatternMaterialUpsertWithWhereUniqueWithoutPatternInput | Prisma.PatternMaterialUpsertWithWhereUniqueWithoutPatternInput[];
    createMany?: Prisma.PatternMaterialCreateManyPatternInputEnvelope;
    set?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    disconnect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    delete?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    update?: Prisma.PatternMaterialUpdateWithWhereUniqueWithoutPatternInput | Prisma.PatternMaterialUpdateWithWhereUniqueWithoutPatternInput[];
    updateMany?: Prisma.PatternMaterialUpdateManyWithWhereWithoutPatternInput | Prisma.PatternMaterialUpdateManyWithWhereWithoutPatternInput[];
    deleteMany?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
};
export type PatternMaterialCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PatternMaterialCreateWithoutMaterialInput[] | Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput | Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PatternMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
};
export type PatternMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PatternMaterialCreateWithoutMaterialInput[] | Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput | Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.PatternMaterialCreateManyMaterialInputEnvelope;
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
};
export type PatternMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PatternMaterialCreateWithoutMaterialInput[] | Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput | Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PatternMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PatternMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PatternMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    disconnect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    delete?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    update?: Prisma.PatternMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PatternMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PatternMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.PatternMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
};
export type PatternMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput> | Prisma.PatternMaterialCreateWithoutMaterialInput[] | Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput | Prisma.PatternMaterialCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.PatternMaterialUpsertWithWhereUniqueWithoutMaterialInput | Prisma.PatternMaterialUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.PatternMaterialCreateManyMaterialInputEnvelope;
    set?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    disconnect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    delete?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    connect?: Prisma.PatternMaterialWhereUniqueInput | Prisma.PatternMaterialWhereUniqueInput[];
    update?: Prisma.PatternMaterialUpdateWithWhereUniqueWithoutMaterialInput | Prisma.PatternMaterialUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.PatternMaterialUpdateManyWithWhereWithoutMaterialInput | Prisma.PatternMaterialUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PatternMaterialCreateWithoutPatternInput = {
    color?: string | null;
    quantity: number;
    material: Prisma.MaterialCreateNestedOneWithoutPatternsInput;
};
export type PatternMaterialUncheckedCreateWithoutPatternInput = {
    id?: number;
    materialId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialCreateOrConnectWithoutPatternInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput>;
};
export type PatternMaterialCreateManyPatternInputEnvelope = {
    data: Prisma.PatternMaterialCreateManyPatternInput | Prisma.PatternMaterialCreateManyPatternInput[];
    skipDuplicates?: boolean;
};
export type PatternMaterialUpsertWithWhereUniqueWithoutPatternInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatternMaterialUpdateWithoutPatternInput, Prisma.PatternMaterialUncheckedUpdateWithoutPatternInput>;
    create: Prisma.XOR<Prisma.PatternMaterialCreateWithoutPatternInput, Prisma.PatternMaterialUncheckedCreateWithoutPatternInput>;
};
export type PatternMaterialUpdateWithWhereUniqueWithoutPatternInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateWithoutPatternInput, Prisma.PatternMaterialUncheckedUpdateWithoutPatternInput>;
};
export type PatternMaterialUpdateManyWithWhereWithoutPatternInput = {
    where: Prisma.PatternMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateManyMutationInput, Prisma.PatternMaterialUncheckedUpdateManyWithoutPatternInput>;
};
export type PatternMaterialScalarWhereInput = {
    AND?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
    OR?: Prisma.PatternMaterialScalarWhereInput[];
    NOT?: Prisma.PatternMaterialScalarWhereInput | Prisma.PatternMaterialScalarWhereInput[];
    id?: Prisma.IntFilter<"PatternMaterial"> | number;
    patternId?: Prisma.IntFilter<"PatternMaterial"> | number;
    materialId?: Prisma.IntFilter<"PatternMaterial"> | number;
    color?: Prisma.StringNullableFilter<"PatternMaterial"> | string | null;
    quantity?: Prisma.FloatFilter<"PatternMaterial"> | number;
};
export type PatternMaterialCreateWithoutMaterialInput = {
    color?: string | null;
    quantity: number;
    pattern: Prisma.PatternCreateNestedOneWithoutMaterialsInput;
};
export type PatternMaterialUncheckedCreateWithoutMaterialInput = {
    id?: number;
    patternId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialCreateOrConnectWithoutMaterialInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput>;
};
export type PatternMaterialCreateManyMaterialInputEnvelope = {
    data: Prisma.PatternMaterialCreateManyMaterialInput | Prisma.PatternMaterialCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type PatternMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatternMaterialUpdateWithoutMaterialInput, Prisma.PatternMaterialUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.PatternMaterialCreateWithoutMaterialInput, Prisma.PatternMaterialUncheckedCreateWithoutMaterialInput>;
};
export type PatternMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.PatternMaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateWithoutMaterialInput, Prisma.PatternMaterialUncheckedUpdateWithoutMaterialInput>;
};
export type PatternMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.PatternMaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateManyMutationInput, Prisma.PatternMaterialUncheckedUpdateManyWithoutMaterialInput>;
};
export type PatternMaterialCreateManyPatternInput = {
    id?: number;
    materialId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialUpdateWithoutPatternInput = {
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    material?: Prisma.MaterialUpdateOneRequiredWithoutPatternsNestedInput;
};
export type PatternMaterialUncheckedUpdateWithoutPatternInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    materialId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialUncheckedUpdateManyWithoutPatternInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    materialId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialCreateManyMaterialInput = {
    id?: number;
    patternId: number;
    color?: string | null;
    quantity: number;
};
export type PatternMaterialUpdateWithoutMaterialInput = {
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    pattern?: Prisma.PatternUpdateOneRequiredWithoutMaterialsNestedInput;
};
export type PatternMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    color?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
};
export type PatternMaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    materialId?: boolean;
    color?: boolean;
    quantity?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternMaterial"]>;
export type PatternMaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    materialId?: boolean;
    color?: boolean;
    quantity?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternMaterial"]>;
export type PatternMaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    materialId?: boolean;
    color?: boolean;
    quantity?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternMaterial"]>;
export type PatternMaterialSelectScalar = {
    id?: boolean;
    patternId?: boolean;
    materialId?: boolean;
    color?: boolean;
    quantity?: boolean;
};
export type PatternMaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patternId" | "materialId" | "color" | "quantity", ExtArgs["result"]["patternMaterial"]>;
export type PatternMaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type PatternMaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type PatternMaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $PatternMaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatternMaterial";
    objects: {
        pattern: Prisma.$PatternPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        patternId: number;
        materialId: number;
        color: string | null;
        quantity: number;
    }, ExtArgs["result"]["patternMaterial"]>;
    composites: {};
};
export type PatternMaterialGetPayload<S extends boolean | null | undefined | PatternMaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload, S>;
export type PatternMaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatternMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatternMaterialCountAggregateInputType | true;
};
export interface PatternMaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatternMaterial'];
        meta: {
            name: 'PatternMaterial';
        };
    };
    findUnique<T extends PatternMaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, PatternMaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatternMaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatternMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatternMaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, PatternMaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatternMaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatternMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatternMaterialFindManyArgs>(args?: Prisma.SelectSubset<T, PatternMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatternMaterialCreateArgs>(args: Prisma.SelectSubset<T, PatternMaterialCreateArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatternMaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, PatternMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatternMaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatternMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatternMaterialDeleteArgs>(args: Prisma.SelectSubset<T, PatternMaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatternMaterialUpdateArgs>(args: Prisma.SelectSubset<T, PatternMaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatternMaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatternMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatternMaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, PatternMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatternMaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatternMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatternMaterialUpsertArgs>(args: Prisma.SelectSubset<T, PatternMaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__PatternMaterialClient<runtime.Types.Result.GetResult<Prisma.$PatternMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatternMaterialCountArgs>(args?: Prisma.Subset<T, PatternMaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatternMaterialCountAggregateOutputType> : number>;
    aggregate<T extends PatternMaterialAggregateArgs>(args: Prisma.Subset<T, PatternMaterialAggregateArgs>): Prisma.PrismaPromise<GetPatternMaterialAggregateType<T>>;
    groupBy<T extends PatternMaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatternMaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: PatternMaterialGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatternMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatternMaterialFieldRefs;
}
export interface Prisma__PatternMaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pattern<T extends Prisma.PatternDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatternDefaultArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatternMaterialFieldRefs {
    readonly id: Prisma.FieldRef<"PatternMaterial", 'Int'>;
    readonly patternId: Prisma.FieldRef<"PatternMaterial", 'Int'>;
    readonly materialId: Prisma.FieldRef<"PatternMaterial", 'Int'>;
    readonly color: Prisma.FieldRef<"PatternMaterial", 'String'>;
    readonly quantity: Prisma.FieldRef<"PatternMaterial", 'Float'>;
}
export type PatternMaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where: Prisma.PatternMaterialWhereUniqueInput;
};
export type PatternMaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where: Prisma.PatternMaterialWhereUniqueInput;
};
export type PatternMaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternMaterialScalarFieldEnum | Prisma.PatternMaterialScalarFieldEnum[];
};
export type PatternMaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternMaterialScalarFieldEnum | Prisma.PatternMaterialScalarFieldEnum[];
};
export type PatternMaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where?: Prisma.PatternMaterialWhereInput;
    orderBy?: Prisma.PatternMaterialOrderByWithRelationInput | Prisma.PatternMaterialOrderByWithRelationInput[];
    cursor?: Prisma.PatternMaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternMaterialScalarFieldEnum | Prisma.PatternMaterialScalarFieldEnum[];
};
export type PatternMaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternMaterialCreateInput, Prisma.PatternMaterialUncheckedCreateInput>;
};
export type PatternMaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatternMaterialCreateManyInput | Prisma.PatternMaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatternMaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    data: Prisma.PatternMaterialCreateManyInput | Prisma.PatternMaterialCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatternMaterialIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatternMaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateInput, Prisma.PatternMaterialUncheckedUpdateInput>;
    where: Prisma.PatternMaterialWhereUniqueInput;
};
export type PatternMaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatternMaterialUpdateManyMutationInput, Prisma.PatternMaterialUncheckedUpdateManyInput>;
    where?: Prisma.PatternMaterialWhereInput;
    limit?: number;
};
export type PatternMaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternMaterialUpdateManyMutationInput, Prisma.PatternMaterialUncheckedUpdateManyInput>;
    where?: Prisma.PatternMaterialWhereInput;
    limit?: number;
    include?: Prisma.PatternMaterialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatternMaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where: Prisma.PatternMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternMaterialCreateInput, Prisma.PatternMaterialUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatternMaterialUpdateInput, Prisma.PatternMaterialUncheckedUpdateInput>;
};
export type PatternMaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
    where: Prisma.PatternMaterialWhereUniqueInput;
};
export type PatternMaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternMaterialWhereInput;
    limit?: number;
};
export type PatternMaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternMaterialSelect<ExtArgs> | null;
    omit?: Prisma.PatternMaterialOmit<ExtArgs> | null;
    include?: Prisma.PatternMaterialInclude<ExtArgs> | null;
};
