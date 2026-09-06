import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatternSectionModel = runtime.Types.Result.DefaultSelection<Prisma.$PatternSectionPayload>;
export type AggregatePatternSection = {
    _count: PatternSectionCountAggregateOutputType | null;
    _avg: PatternSectionAvgAggregateOutputType | null;
    _sum: PatternSectionSumAggregateOutputType | null;
    _min: PatternSectionMinAggregateOutputType | null;
    _max: PatternSectionMaxAggregateOutputType | null;
};
export type PatternSectionAvgAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    displayOrder: number | null;
};
export type PatternSectionSumAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    displayOrder: number | null;
};
export type PatternSectionMinAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    name: string | null;
    displayOrder: number | null;
};
export type PatternSectionMaxAggregateOutputType = {
    id: number | null;
    patternId: number | null;
    name: string | null;
    displayOrder: number | null;
};
export type PatternSectionCountAggregateOutputType = {
    id: number;
    patternId: number;
    name: number;
    displayOrder: number;
    _all: number;
};
export type PatternSectionAvgAggregateInputType = {
    id?: true;
    patternId?: true;
    displayOrder?: true;
};
export type PatternSectionSumAggregateInputType = {
    id?: true;
    patternId?: true;
    displayOrder?: true;
};
export type PatternSectionMinAggregateInputType = {
    id?: true;
    patternId?: true;
    name?: true;
    displayOrder?: true;
};
export type PatternSectionMaxAggregateInputType = {
    id?: true;
    patternId?: true;
    name?: true;
    displayOrder?: true;
};
export type PatternSectionCountAggregateInputType = {
    id?: true;
    patternId?: true;
    name?: true;
    displayOrder?: true;
    _all?: true;
};
export type PatternSectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithRelationInput | Prisma.PatternSectionOrderByWithRelationInput[];
    cursor?: Prisma.PatternSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatternSectionCountAggregateInputType;
    _avg?: PatternSectionAvgAggregateInputType;
    _sum?: PatternSectionSumAggregateInputType;
    _min?: PatternSectionMinAggregateInputType;
    _max?: PatternSectionMaxAggregateInputType;
};
export type GetPatternSectionAggregateType<T extends PatternSectionAggregateArgs> = {
    [P in keyof T & keyof AggregatePatternSection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatternSection[P]> : Prisma.GetScalarType<T[P], AggregatePatternSection[P]>;
};
export type PatternSectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithAggregationInput | Prisma.PatternSectionOrderByWithAggregationInput[];
    by: Prisma.PatternSectionScalarFieldEnum[] | Prisma.PatternSectionScalarFieldEnum;
    having?: Prisma.PatternSectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatternSectionCountAggregateInputType | true;
    _avg?: PatternSectionAvgAggregateInputType;
    _sum?: PatternSectionSumAggregateInputType;
    _min?: PatternSectionMinAggregateInputType;
    _max?: PatternSectionMaxAggregateInputType;
};
export type PatternSectionGroupByOutputType = {
    id: number;
    patternId: number;
    name: string;
    displayOrder: number;
    _count: PatternSectionCountAggregateOutputType | null;
    _avg: PatternSectionAvgAggregateOutputType | null;
    _sum: PatternSectionSumAggregateOutputType | null;
    _min: PatternSectionMinAggregateOutputType | null;
    _max: PatternSectionMaxAggregateOutputType | null;
};
export type GetPatternSectionGroupByPayload<T extends PatternSectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatternSectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatternSectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatternSectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatternSectionGroupByOutputType[P]>;
}>>;
export type PatternSectionWhereInput = {
    AND?: Prisma.PatternSectionWhereInput | Prisma.PatternSectionWhereInput[];
    OR?: Prisma.PatternSectionWhereInput[];
    NOT?: Prisma.PatternSectionWhereInput | Prisma.PatternSectionWhereInput[];
    id?: Prisma.IntFilter<"PatternSection"> | number;
    patternId?: Prisma.IntFilter<"PatternSection"> | number;
    name?: Prisma.StringFilter<"PatternSection"> | string;
    displayOrder?: Prisma.IntFilter<"PatternSection"> | number;
    pattern?: Prisma.XOR<Prisma.PatternScalarRelationFilter, Prisma.PatternWhereInput>;
    rounds?: Prisma.PatternRoundListRelationFilter;
};
export type PatternSectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    pattern?: Prisma.PatternOrderByWithRelationInput;
    rounds?: Prisma.PatternRoundOrderByRelationAggregateInput;
};
export type PatternSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PatternSectionWhereInput | Prisma.PatternSectionWhereInput[];
    OR?: Prisma.PatternSectionWhereInput[];
    NOT?: Prisma.PatternSectionWhereInput | Prisma.PatternSectionWhereInput[];
    patternId?: Prisma.IntFilter<"PatternSection"> | number;
    name?: Prisma.StringFilter<"PatternSection"> | string;
    displayOrder?: Prisma.IntFilter<"PatternSection"> | number;
    pattern?: Prisma.XOR<Prisma.PatternScalarRelationFilter, Prisma.PatternWhereInput>;
    rounds?: Prisma.PatternRoundListRelationFilter;
}, "id">;
export type PatternSectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    _count?: Prisma.PatternSectionCountOrderByAggregateInput;
    _avg?: Prisma.PatternSectionAvgOrderByAggregateInput;
    _max?: Prisma.PatternSectionMaxOrderByAggregateInput;
    _min?: Prisma.PatternSectionMinOrderByAggregateInput;
    _sum?: Prisma.PatternSectionSumOrderByAggregateInput;
};
export type PatternSectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatternSectionScalarWhereWithAggregatesInput | Prisma.PatternSectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatternSectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatternSectionScalarWhereWithAggregatesInput | Prisma.PatternSectionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PatternSection"> | number;
    patternId?: Prisma.IntWithAggregatesFilter<"PatternSection"> | number;
    name?: Prisma.StringWithAggregatesFilter<"PatternSection"> | string;
    displayOrder?: Prisma.IntWithAggregatesFilter<"PatternSection"> | number;
};
export type PatternSectionCreateInput = {
    name: string;
    displayOrder: number;
    pattern: Prisma.PatternCreateNestedOneWithoutSectionsInput;
    rounds?: Prisma.PatternRoundCreateNestedManyWithoutSectionInput;
};
export type PatternSectionUncheckedCreateInput = {
    id?: number;
    patternId: number;
    name: string;
    displayOrder: number;
    rounds?: Prisma.PatternRoundUncheckedCreateNestedManyWithoutSectionInput;
};
export type PatternSectionUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    pattern?: Prisma.PatternUpdateOneRequiredWithoutSectionsNestedInput;
    rounds?: Prisma.PatternRoundUpdateManyWithoutSectionNestedInput;
};
export type PatternSectionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    rounds?: Prisma.PatternRoundUncheckedUpdateManyWithoutSectionNestedInput;
};
export type PatternSectionCreateManyInput = {
    id?: number;
    patternId: number;
    name: string;
    displayOrder: number;
};
export type PatternSectionUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternSectionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternSectionListRelationFilter = {
    every?: Prisma.PatternSectionWhereInput;
    some?: Prisma.PatternSectionWhereInput;
    none?: Prisma.PatternSectionWhereInput;
};
export type PatternSectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatternSectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternSectionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternSectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternSectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternSectionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patternId?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternSectionScalarRelationFilter = {
    is?: Prisma.PatternSectionWhereInput;
    isNot?: Prisma.PatternSectionWhereInput;
};
export type PatternSectionCreateNestedManyWithoutPatternInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput> | Prisma.PatternSectionCreateWithoutPatternInput[] | Prisma.PatternSectionUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutPatternInput | Prisma.PatternSectionCreateOrConnectWithoutPatternInput[];
    createMany?: Prisma.PatternSectionCreateManyPatternInputEnvelope;
    connect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
};
export type PatternSectionUncheckedCreateNestedManyWithoutPatternInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput> | Prisma.PatternSectionCreateWithoutPatternInput[] | Prisma.PatternSectionUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutPatternInput | Prisma.PatternSectionCreateOrConnectWithoutPatternInput[];
    createMany?: Prisma.PatternSectionCreateManyPatternInputEnvelope;
    connect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
};
export type PatternSectionUpdateManyWithoutPatternNestedInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput> | Prisma.PatternSectionCreateWithoutPatternInput[] | Prisma.PatternSectionUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutPatternInput | Prisma.PatternSectionCreateOrConnectWithoutPatternInput[];
    upsert?: Prisma.PatternSectionUpsertWithWhereUniqueWithoutPatternInput | Prisma.PatternSectionUpsertWithWhereUniqueWithoutPatternInput[];
    createMany?: Prisma.PatternSectionCreateManyPatternInputEnvelope;
    set?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    disconnect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    delete?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    connect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    update?: Prisma.PatternSectionUpdateWithWhereUniqueWithoutPatternInput | Prisma.PatternSectionUpdateWithWhereUniqueWithoutPatternInput[];
    updateMany?: Prisma.PatternSectionUpdateManyWithWhereWithoutPatternInput | Prisma.PatternSectionUpdateManyWithWhereWithoutPatternInput[];
    deleteMany?: Prisma.PatternSectionScalarWhereInput | Prisma.PatternSectionScalarWhereInput[];
};
export type PatternSectionUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput> | Prisma.PatternSectionCreateWithoutPatternInput[] | Prisma.PatternSectionUncheckedCreateWithoutPatternInput[];
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutPatternInput | Prisma.PatternSectionCreateOrConnectWithoutPatternInput[];
    upsert?: Prisma.PatternSectionUpsertWithWhereUniqueWithoutPatternInput | Prisma.PatternSectionUpsertWithWhereUniqueWithoutPatternInput[];
    createMany?: Prisma.PatternSectionCreateManyPatternInputEnvelope;
    set?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    disconnect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    delete?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    connect?: Prisma.PatternSectionWhereUniqueInput | Prisma.PatternSectionWhereUniqueInput[];
    update?: Prisma.PatternSectionUpdateWithWhereUniqueWithoutPatternInput | Prisma.PatternSectionUpdateWithWhereUniqueWithoutPatternInput[];
    updateMany?: Prisma.PatternSectionUpdateManyWithWhereWithoutPatternInput | Prisma.PatternSectionUpdateManyWithWhereWithoutPatternInput[];
    deleteMany?: Prisma.PatternSectionScalarWhereInput | Prisma.PatternSectionScalarWhereInput[];
};
export type PatternSectionCreateNestedOneWithoutRoundsInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutRoundsInput, Prisma.PatternSectionUncheckedCreateWithoutRoundsInput>;
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutRoundsInput;
    connect?: Prisma.PatternSectionWhereUniqueInput;
};
export type PatternSectionUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: Prisma.XOR<Prisma.PatternSectionCreateWithoutRoundsInput, Prisma.PatternSectionUncheckedCreateWithoutRoundsInput>;
    connectOrCreate?: Prisma.PatternSectionCreateOrConnectWithoutRoundsInput;
    upsert?: Prisma.PatternSectionUpsertWithoutRoundsInput;
    connect?: Prisma.PatternSectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PatternSectionUpdateToOneWithWhereWithoutRoundsInput, Prisma.PatternSectionUpdateWithoutRoundsInput>, Prisma.PatternSectionUncheckedUpdateWithoutRoundsInput>;
};
export type PatternSectionCreateWithoutPatternInput = {
    name: string;
    displayOrder: number;
    rounds?: Prisma.PatternRoundCreateNestedManyWithoutSectionInput;
};
export type PatternSectionUncheckedCreateWithoutPatternInput = {
    id?: number;
    name: string;
    displayOrder: number;
    rounds?: Prisma.PatternRoundUncheckedCreateNestedManyWithoutSectionInput;
};
export type PatternSectionCreateOrConnectWithoutPatternInput = {
    where: Prisma.PatternSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput>;
};
export type PatternSectionCreateManyPatternInputEnvelope = {
    data: Prisma.PatternSectionCreateManyPatternInput | Prisma.PatternSectionCreateManyPatternInput[];
    skipDuplicates?: boolean;
};
export type PatternSectionUpsertWithWhereUniqueWithoutPatternInput = {
    where: Prisma.PatternSectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatternSectionUpdateWithoutPatternInput, Prisma.PatternSectionUncheckedUpdateWithoutPatternInput>;
    create: Prisma.XOR<Prisma.PatternSectionCreateWithoutPatternInput, Prisma.PatternSectionUncheckedCreateWithoutPatternInput>;
};
export type PatternSectionUpdateWithWhereUniqueWithoutPatternInput = {
    where: Prisma.PatternSectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatternSectionUpdateWithoutPatternInput, Prisma.PatternSectionUncheckedUpdateWithoutPatternInput>;
};
export type PatternSectionUpdateManyWithWhereWithoutPatternInput = {
    where: Prisma.PatternSectionScalarWhereInput;
    data: Prisma.XOR<Prisma.PatternSectionUpdateManyMutationInput, Prisma.PatternSectionUncheckedUpdateManyWithoutPatternInput>;
};
export type PatternSectionScalarWhereInput = {
    AND?: Prisma.PatternSectionScalarWhereInput | Prisma.PatternSectionScalarWhereInput[];
    OR?: Prisma.PatternSectionScalarWhereInput[];
    NOT?: Prisma.PatternSectionScalarWhereInput | Prisma.PatternSectionScalarWhereInput[];
    id?: Prisma.IntFilter<"PatternSection"> | number;
    patternId?: Prisma.IntFilter<"PatternSection"> | number;
    name?: Prisma.StringFilter<"PatternSection"> | string;
    displayOrder?: Prisma.IntFilter<"PatternSection"> | number;
};
export type PatternSectionCreateWithoutRoundsInput = {
    name: string;
    displayOrder: number;
    pattern: Prisma.PatternCreateNestedOneWithoutSectionsInput;
};
export type PatternSectionUncheckedCreateWithoutRoundsInput = {
    id?: number;
    patternId: number;
    name: string;
    displayOrder: number;
};
export type PatternSectionCreateOrConnectWithoutRoundsInput = {
    where: Prisma.PatternSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternSectionCreateWithoutRoundsInput, Prisma.PatternSectionUncheckedCreateWithoutRoundsInput>;
};
export type PatternSectionUpsertWithoutRoundsInput = {
    update: Prisma.XOR<Prisma.PatternSectionUpdateWithoutRoundsInput, Prisma.PatternSectionUncheckedUpdateWithoutRoundsInput>;
    create: Prisma.XOR<Prisma.PatternSectionCreateWithoutRoundsInput, Prisma.PatternSectionUncheckedCreateWithoutRoundsInput>;
    where?: Prisma.PatternSectionWhereInput;
};
export type PatternSectionUpdateToOneWithWhereWithoutRoundsInput = {
    where?: Prisma.PatternSectionWhereInput;
    data: Prisma.XOR<Prisma.PatternSectionUpdateWithoutRoundsInput, Prisma.PatternSectionUncheckedUpdateWithoutRoundsInput>;
};
export type PatternSectionUpdateWithoutRoundsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    pattern?: Prisma.PatternUpdateOneRequiredWithoutSectionsNestedInput;
};
export type PatternSectionUncheckedUpdateWithoutRoundsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patternId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternSectionCreateManyPatternInput = {
    id?: number;
    name: string;
    displayOrder: number;
};
export type PatternSectionUpdateWithoutPatternInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    rounds?: Prisma.PatternRoundUpdateManyWithoutSectionNestedInput;
};
export type PatternSectionUncheckedUpdateWithoutPatternInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    rounds?: Prisma.PatternRoundUncheckedUpdateManyWithoutSectionNestedInput;
};
export type PatternSectionUncheckedUpdateManyWithoutPatternInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternSectionCountOutputType = {
    rounds: number;
};
export type PatternSectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rounds?: boolean | PatternSectionCountOutputTypeCountRoundsArgs;
};
export type PatternSectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionCountOutputTypeSelect<ExtArgs> | null;
};
export type PatternSectionCountOutputTypeCountRoundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternRoundWhereInput;
};
export type PatternSectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    name?: boolean;
    displayOrder?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    rounds?: boolean | Prisma.PatternSection$roundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatternSectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternSection"]>;
export type PatternSectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    name?: boolean;
    displayOrder?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternSection"]>;
export type PatternSectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patternId?: boolean;
    name?: boolean;
    displayOrder?: boolean;
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternSection"]>;
export type PatternSectionSelectScalar = {
    id?: boolean;
    patternId?: boolean;
    name?: boolean;
    displayOrder?: boolean;
};
export type PatternSectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patternId" | "name" | "displayOrder", ExtArgs["result"]["patternSection"]>;
export type PatternSectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
    rounds?: boolean | Prisma.PatternSection$roundsArgs<ExtArgs>;
    _count?: boolean | Prisma.PatternSectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PatternSectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
};
export type PatternSectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pattern?: boolean | Prisma.PatternDefaultArgs<ExtArgs>;
};
export type $PatternSectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatternSection";
    objects: {
        pattern: Prisma.$PatternPayload<ExtArgs>;
        rounds: Prisma.$PatternRoundPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        patternId: number;
        name: string;
        displayOrder: number;
    }, ExtArgs["result"]["patternSection"]>;
    composites: {};
};
export type PatternSectionGetPayload<S extends boolean | null | undefined | PatternSectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload, S>;
export type PatternSectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatternSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatternSectionCountAggregateInputType | true;
};
export interface PatternSectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatternSection'];
        meta: {
            name: 'PatternSection';
        };
    };
    findUnique<T extends PatternSectionFindUniqueArgs>(args: Prisma.SelectSubset<T, PatternSectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatternSectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatternSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatternSectionFindFirstArgs>(args?: Prisma.SelectSubset<T, PatternSectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatternSectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatternSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatternSectionFindManyArgs>(args?: Prisma.SelectSubset<T, PatternSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatternSectionCreateArgs>(args: Prisma.SelectSubset<T, PatternSectionCreateArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatternSectionCreateManyArgs>(args?: Prisma.SelectSubset<T, PatternSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatternSectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatternSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatternSectionDeleteArgs>(args: Prisma.SelectSubset<T, PatternSectionDeleteArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatternSectionUpdateArgs>(args: Prisma.SelectSubset<T, PatternSectionUpdateArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatternSectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatternSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatternSectionUpdateManyArgs>(args: Prisma.SelectSubset<T, PatternSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatternSectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatternSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatternSectionUpsertArgs>(args: Prisma.SelectSubset<T, PatternSectionUpsertArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatternSectionCountArgs>(args?: Prisma.Subset<T, PatternSectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatternSectionCountAggregateOutputType> : number>;
    aggregate<T extends PatternSectionAggregateArgs>(args: Prisma.Subset<T, PatternSectionAggregateArgs>): Prisma.PrismaPromise<GetPatternSectionAggregateType<T>>;
    groupBy<T extends PatternSectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatternSectionGroupByArgs['orderBy'];
    } : {
        orderBy?: PatternSectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatternSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatternSectionFieldRefs;
}
export interface Prisma__PatternSectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pattern<T extends Prisma.PatternDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatternDefaultArgs<ExtArgs>>): Prisma.Prisma__PatternClient<runtime.Types.Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rounds<T extends Prisma.PatternSection$roundsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatternSection$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatternSectionFieldRefs {
    readonly id: Prisma.FieldRef<"PatternSection", 'Int'>;
    readonly patternId: Prisma.FieldRef<"PatternSection", 'Int'>;
    readonly name: Prisma.FieldRef<"PatternSection", 'String'>;
    readonly displayOrder: Prisma.FieldRef<"PatternSection", 'Int'>;
}
export type PatternSectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where: Prisma.PatternSectionWhereUniqueInput;
};
export type PatternSectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where: Prisma.PatternSectionWhereUniqueInput;
};
export type PatternSectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithRelationInput | Prisma.PatternSectionOrderByWithRelationInput[];
    cursor?: Prisma.PatternSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternSectionScalarFieldEnum | Prisma.PatternSectionScalarFieldEnum[];
};
export type PatternSectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithRelationInput | Prisma.PatternSectionOrderByWithRelationInput[];
    cursor?: Prisma.PatternSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternSectionScalarFieldEnum | Prisma.PatternSectionScalarFieldEnum[];
};
export type PatternSectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where?: Prisma.PatternSectionWhereInput;
    orderBy?: Prisma.PatternSectionOrderByWithRelationInput | Prisma.PatternSectionOrderByWithRelationInput[];
    cursor?: Prisma.PatternSectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternSectionScalarFieldEnum | Prisma.PatternSectionScalarFieldEnum[];
};
export type PatternSectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternSectionCreateInput, Prisma.PatternSectionUncheckedCreateInput>;
};
export type PatternSectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatternSectionCreateManyInput | Prisma.PatternSectionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatternSectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    data: Prisma.PatternSectionCreateManyInput | Prisma.PatternSectionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatternSectionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatternSectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternSectionUpdateInput, Prisma.PatternSectionUncheckedUpdateInput>;
    where: Prisma.PatternSectionWhereUniqueInput;
};
export type PatternSectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatternSectionUpdateManyMutationInput, Prisma.PatternSectionUncheckedUpdateManyInput>;
    where?: Prisma.PatternSectionWhereInput;
    limit?: number;
};
export type PatternSectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternSectionUpdateManyMutationInput, Prisma.PatternSectionUncheckedUpdateManyInput>;
    where?: Prisma.PatternSectionWhereInput;
    limit?: number;
    include?: Prisma.PatternSectionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatternSectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where: Prisma.PatternSectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternSectionCreateInput, Prisma.PatternSectionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatternSectionUpdateInput, Prisma.PatternSectionUncheckedUpdateInput>;
};
export type PatternSectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
    where: Prisma.PatternSectionWhereUniqueInput;
};
export type PatternSectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternSectionWhereInput;
    limit?: number;
};
export type PatternSection$roundsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    where?: Prisma.PatternRoundWhereInput;
    orderBy?: Prisma.PatternRoundOrderByWithRelationInput | Prisma.PatternRoundOrderByWithRelationInput[];
    cursor?: Prisma.PatternRoundWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PatternRoundScalarFieldEnum | Prisma.PatternRoundScalarFieldEnum[];
};
export type PatternSectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternSectionSelect<ExtArgs> | null;
    omit?: Prisma.PatternSectionOmit<ExtArgs> | null;
    include?: Prisma.PatternSectionInclude<ExtArgs> | null;
};
