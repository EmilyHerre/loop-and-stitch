import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PatternRoundModel = runtime.Types.Result.DefaultSelection<Prisma.$PatternRoundPayload>;
export type AggregatePatternRound = {
    _count: PatternRoundCountAggregateOutputType | null;
    _avg: PatternRoundAvgAggregateOutputType | null;
    _sum: PatternRoundSumAggregateOutputType | null;
    _min: PatternRoundMinAggregateOutputType | null;
    _max: PatternRoundMaxAggregateOutputType | null;
};
export type PatternRoundAvgAggregateOutputType = {
    id: number | null;
    sectionId: number | null;
    roundNumber: number | null;
    displayOrder: number | null;
};
export type PatternRoundSumAggregateOutputType = {
    id: number | null;
    sectionId: number | null;
    roundNumber: number | null;
    displayOrder: number | null;
};
export type PatternRoundMinAggregateOutputType = {
    id: number | null;
    sectionId: number | null;
    roundNumber: number | null;
    instructions: string | null;
    displayOrder: number | null;
};
export type PatternRoundMaxAggregateOutputType = {
    id: number | null;
    sectionId: number | null;
    roundNumber: number | null;
    instructions: string | null;
    displayOrder: number | null;
};
export type PatternRoundCountAggregateOutputType = {
    id: number;
    sectionId: number;
    roundNumber: number;
    instructions: number;
    displayOrder: number;
    _all: number;
};
export type PatternRoundAvgAggregateInputType = {
    id?: true;
    sectionId?: true;
    roundNumber?: true;
    displayOrder?: true;
};
export type PatternRoundSumAggregateInputType = {
    id?: true;
    sectionId?: true;
    roundNumber?: true;
    displayOrder?: true;
};
export type PatternRoundMinAggregateInputType = {
    id?: true;
    sectionId?: true;
    roundNumber?: true;
    instructions?: true;
    displayOrder?: true;
};
export type PatternRoundMaxAggregateInputType = {
    id?: true;
    sectionId?: true;
    roundNumber?: true;
    instructions?: true;
    displayOrder?: true;
};
export type PatternRoundCountAggregateInputType = {
    id?: true;
    sectionId?: true;
    roundNumber?: true;
    instructions?: true;
    displayOrder?: true;
    _all?: true;
};
export type PatternRoundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternRoundWhereInput;
    orderBy?: Prisma.PatternRoundOrderByWithRelationInput | Prisma.PatternRoundOrderByWithRelationInput[];
    cursor?: Prisma.PatternRoundWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PatternRoundCountAggregateInputType;
    _avg?: PatternRoundAvgAggregateInputType;
    _sum?: PatternRoundSumAggregateInputType;
    _min?: PatternRoundMinAggregateInputType;
    _max?: PatternRoundMaxAggregateInputType;
};
export type GetPatternRoundAggregateType<T extends PatternRoundAggregateArgs> = {
    [P in keyof T & keyof AggregatePatternRound]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatternRound[P]> : Prisma.GetScalarType<T[P], AggregatePatternRound[P]>;
};
export type PatternRoundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternRoundWhereInput;
    orderBy?: Prisma.PatternRoundOrderByWithAggregationInput | Prisma.PatternRoundOrderByWithAggregationInput[];
    by: Prisma.PatternRoundScalarFieldEnum[] | Prisma.PatternRoundScalarFieldEnum;
    having?: Prisma.PatternRoundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatternRoundCountAggregateInputType | true;
    _avg?: PatternRoundAvgAggregateInputType;
    _sum?: PatternRoundSumAggregateInputType;
    _min?: PatternRoundMinAggregateInputType;
    _max?: PatternRoundMaxAggregateInputType;
};
export type PatternRoundGroupByOutputType = {
    id: number;
    sectionId: number;
    roundNumber: number;
    instructions: string;
    displayOrder: number;
    _count: PatternRoundCountAggregateOutputType | null;
    _avg: PatternRoundAvgAggregateOutputType | null;
    _sum: PatternRoundSumAggregateOutputType | null;
    _min: PatternRoundMinAggregateOutputType | null;
    _max: PatternRoundMaxAggregateOutputType | null;
};
export type GetPatternRoundGroupByPayload<T extends PatternRoundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatternRoundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatternRoundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatternRoundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatternRoundGroupByOutputType[P]>;
}>>;
export type PatternRoundWhereInput = {
    AND?: Prisma.PatternRoundWhereInput | Prisma.PatternRoundWhereInput[];
    OR?: Prisma.PatternRoundWhereInput[];
    NOT?: Prisma.PatternRoundWhereInput | Prisma.PatternRoundWhereInput[];
    id?: Prisma.IntFilter<"PatternRound"> | number;
    sectionId?: Prisma.IntFilter<"PatternRound"> | number;
    roundNumber?: Prisma.IntFilter<"PatternRound"> | number;
    instructions?: Prisma.StringFilter<"PatternRound"> | string;
    displayOrder?: Prisma.IntFilter<"PatternRound"> | number;
    section?: Prisma.XOR<Prisma.PatternSectionScalarRelationFilter, Prisma.PatternSectionWhereInput>;
};
export type PatternRoundOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    section?: Prisma.PatternSectionOrderByWithRelationInput;
};
export type PatternRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PatternRoundWhereInput | Prisma.PatternRoundWhereInput[];
    OR?: Prisma.PatternRoundWhereInput[];
    NOT?: Prisma.PatternRoundWhereInput | Prisma.PatternRoundWhereInput[];
    sectionId?: Prisma.IntFilter<"PatternRound"> | number;
    roundNumber?: Prisma.IntFilter<"PatternRound"> | number;
    instructions?: Prisma.StringFilter<"PatternRound"> | string;
    displayOrder?: Prisma.IntFilter<"PatternRound"> | number;
    section?: Prisma.XOR<Prisma.PatternSectionScalarRelationFilter, Prisma.PatternSectionWhereInput>;
}, "id">;
export type PatternRoundOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
    _count?: Prisma.PatternRoundCountOrderByAggregateInput;
    _avg?: Prisma.PatternRoundAvgOrderByAggregateInput;
    _max?: Prisma.PatternRoundMaxOrderByAggregateInput;
    _min?: Prisma.PatternRoundMinOrderByAggregateInput;
    _sum?: Prisma.PatternRoundSumOrderByAggregateInput;
};
export type PatternRoundScalarWhereWithAggregatesInput = {
    AND?: Prisma.PatternRoundScalarWhereWithAggregatesInput | Prisma.PatternRoundScalarWhereWithAggregatesInput[];
    OR?: Prisma.PatternRoundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PatternRoundScalarWhereWithAggregatesInput | Prisma.PatternRoundScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PatternRound"> | number;
    sectionId?: Prisma.IntWithAggregatesFilter<"PatternRound"> | number;
    roundNumber?: Prisma.IntWithAggregatesFilter<"PatternRound"> | number;
    instructions?: Prisma.StringWithAggregatesFilter<"PatternRound"> | string;
    displayOrder?: Prisma.IntWithAggregatesFilter<"PatternRound"> | number;
};
export type PatternRoundCreateInput = {
    roundNumber: number;
    instructions: string;
    displayOrder: number;
    section: Prisma.PatternSectionCreateNestedOneWithoutRoundsInput;
};
export type PatternRoundUncheckedCreateInput = {
    id?: number;
    sectionId: number;
    roundNumber: number;
    instructions: string;
    displayOrder: number;
};
export type PatternRoundUpdateInput = {
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    section?: Prisma.PatternSectionUpdateOneRequiredWithoutRoundsNestedInput;
};
export type PatternRoundUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.IntFieldUpdateOperationsInput | number;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundCreateManyInput = {
    id?: number;
    sectionId: number;
    roundNumber: number;
    instructions: string;
    displayOrder: number;
};
export type PatternRoundUpdateManyMutationInput = {
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sectionId?: Prisma.IntFieldUpdateOperationsInput | number;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundListRelationFilter = {
    every?: Prisma.PatternRoundWhereInput;
    some?: Prisma.PatternRoundWhereInput;
    none?: Prisma.PatternRoundWhereInput;
};
export type PatternRoundOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PatternRoundCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternRoundAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternRoundMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternRoundMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    instructions?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternRoundSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    displayOrder?: Prisma.SortOrder;
};
export type PatternRoundCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput> | Prisma.PatternRoundCreateWithoutSectionInput[] | Prisma.PatternRoundUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.PatternRoundCreateOrConnectWithoutSectionInput | Prisma.PatternRoundCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.PatternRoundCreateManySectionInputEnvelope;
    connect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
};
export type PatternRoundUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput> | Prisma.PatternRoundCreateWithoutSectionInput[] | Prisma.PatternRoundUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.PatternRoundCreateOrConnectWithoutSectionInput | Prisma.PatternRoundCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.PatternRoundCreateManySectionInputEnvelope;
    connect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
};
export type PatternRoundUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput> | Prisma.PatternRoundCreateWithoutSectionInput[] | Prisma.PatternRoundUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.PatternRoundCreateOrConnectWithoutSectionInput | Prisma.PatternRoundCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.PatternRoundUpsertWithWhereUniqueWithoutSectionInput | Prisma.PatternRoundUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.PatternRoundCreateManySectionInputEnvelope;
    set?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    disconnect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    delete?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    connect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    update?: Prisma.PatternRoundUpdateWithWhereUniqueWithoutSectionInput | Prisma.PatternRoundUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.PatternRoundUpdateManyWithWhereWithoutSectionInput | Prisma.PatternRoundUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.PatternRoundScalarWhereInput | Prisma.PatternRoundScalarWhereInput[];
};
export type PatternRoundUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput> | Prisma.PatternRoundCreateWithoutSectionInput[] | Prisma.PatternRoundUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.PatternRoundCreateOrConnectWithoutSectionInput | Prisma.PatternRoundCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.PatternRoundUpsertWithWhereUniqueWithoutSectionInput | Prisma.PatternRoundUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.PatternRoundCreateManySectionInputEnvelope;
    set?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    disconnect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    delete?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    connect?: Prisma.PatternRoundWhereUniqueInput | Prisma.PatternRoundWhereUniqueInput[];
    update?: Prisma.PatternRoundUpdateWithWhereUniqueWithoutSectionInput | Prisma.PatternRoundUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.PatternRoundUpdateManyWithWhereWithoutSectionInput | Prisma.PatternRoundUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.PatternRoundScalarWhereInput | Prisma.PatternRoundScalarWhereInput[];
};
export type PatternRoundCreateWithoutSectionInput = {
    roundNumber: number;
    instructions: string;
    displayOrder: number;
};
export type PatternRoundUncheckedCreateWithoutSectionInput = {
    id?: number;
    roundNumber: number;
    instructions: string;
    displayOrder: number;
};
export type PatternRoundCreateOrConnectWithoutSectionInput = {
    where: Prisma.PatternRoundWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput>;
};
export type PatternRoundCreateManySectionInputEnvelope = {
    data: Prisma.PatternRoundCreateManySectionInput | Prisma.PatternRoundCreateManySectionInput[];
    skipDuplicates?: boolean;
};
export type PatternRoundUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.PatternRoundWhereUniqueInput;
    update: Prisma.XOR<Prisma.PatternRoundUpdateWithoutSectionInput, Prisma.PatternRoundUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.PatternRoundCreateWithoutSectionInput, Prisma.PatternRoundUncheckedCreateWithoutSectionInput>;
};
export type PatternRoundUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.PatternRoundWhereUniqueInput;
    data: Prisma.XOR<Prisma.PatternRoundUpdateWithoutSectionInput, Prisma.PatternRoundUncheckedUpdateWithoutSectionInput>;
};
export type PatternRoundUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.PatternRoundScalarWhereInput;
    data: Prisma.XOR<Prisma.PatternRoundUpdateManyMutationInput, Prisma.PatternRoundUncheckedUpdateManyWithoutSectionInput>;
};
export type PatternRoundScalarWhereInput = {
    AND?: Prisma.PatternRoundScalarWhereInput | Prisma.PatternRoundScalarWhereInput[];
    OR?: Prisma.PatternRoundScalarWhereInput[];
    NOT?: Prisma.PatternRoundScalarWhereInput | Prisma.PatternRoundScalarWhereInput[];
    id?: Prisma.IntFilter<"PatternRound"> | number;
    sectionId?: Prisma.IntFilter<"PatternRound"> | number;
    roundNumber?: Prisma.IntFilter<"PatternRound"> | number;
    instructions?: Prisma.StringFilter<"PatternRound"> | string;
    displayOrder?: Prisma.IntFilter<"PatternRound"> | number;
};
export type PatternRoundCreateManySectionInput = {
    id?: number;
    roundNumber: number;
    instructions: string;
    displayOrder: number;
};
export type PatternRoundUpdateWithoutSectionInput = {
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundUncheckedUpdateWithoutSectionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundUncheckedUpdateManyWithoutSectionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    instructions?: Prisma.StringFieldUpdateOperationsInput | string;
    displayOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PatternRoundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    roundNumber?: boolean;
    instructions?: boolean;
    displayOrder?: boolean;
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternRound"]>;
export type PatternRoundSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    roundNumber?: boolean;
    instructions?: boolean;
    displayOrder?: boolean;
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternRound"]>;
export type PatternRoundSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sectionId?: boolean;
    roundNumber?: boolean;
    instructions?: boolean;
    displayOrder?: boolean;
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patternRound"]>;
export type PatternRoundSelectScalar = {
    id?: boolean;
    sectionId?: boolean;
    roundNumber?: boolean;
    instructions?: boolean;
    displayOrder?: boolean;
};
export type PatternRoundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sectionId" | "roundNumber" | "instructions" | "displayOrder", ExtArgs["result"]["patternRound"]>;
export type PatternRoundInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
};
export type PatternRoundIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
};
export type PatternRoundIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.PatternSectionDefaultArgs<ExtArgs>;
};
export type $PatternRoundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PatternRound";
    objects: {
        section: Prisma.$PatternSectionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        sectionId: number;
        roundNumber: number;
        instructions: string;
        displayOrder: number;
    }, ExtArgs["result"]["patternRound"]>;
    composites: {};
};
export type PatternRoundGetPayload<S extends boolean | null | undefined | PatternRoundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload, S>;
export type PatternRoundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PatternRoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatternRoundCountAggregateInputType | true;
};
export interface PatternRoundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PatternRound'];
        meta: {
            name: 'PatternRound';
        };
    };
    findUnique<T extends PatternRoundFindUniqueArgs>(args: Prisma.SelectSubset<T, PatternRoundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PatternRoundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PatternRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PatternRoundFindFirstArgs>(args?: Prisma.SelectSubset<T, PatternRoundFindFirstArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PatternRoundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PatternRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PatternRoundFindManyArgs>(args?: Prisma.SelectSubset<T, PatternRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PatternRoundCreateArgs>(args: Prisma.SelectSubset<T, PatternRoundCreateArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PatternRoundCreateManyArgs>(args?: Prisma.SelectSubset<T, PatternRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PatternRoundCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PatternRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PatternRoundDeleteArgs>(args: Prisma.SelectSubset<T, PatternRoundDeleteArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PatternRoundUpdateArgs>(args: Prisma.SelectSubset<T, PatternRoundUpdateArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PatternRoundDeleteManyArgs>(args?: Prisma.SelectSubset<T, PatternRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PatternRoundUpdateManyArgs>(args: Prisma.SelectSubset<T, PatternRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PatternRoundUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PatternRoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PatternRoundUpsertArgs>(args: Prisma.SelectSubset<T, PatternRoundUpsertArgs<ExtArgs>>): Prisma.Prisma__PatternRoundClient<runtime.Types.Result.GetResult<Prisma.$PatternRoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PatternRoundCountArgs>(args?: Prisma.Subset<T, PatternRoundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatternRoundCountAggregateOutputType> : number>;
    aggregate<T extends PatternRoundAggregateArgs>(args: Prisma.Subset<T, PatternRoundAggregateArgs>): Prisma.PrismaPromise<GetPatternRoundAggregateType<T>>;
    groupBy<T extends PatternRoundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PatternRoundGroupByArgs['orderBy'];
    } : {
        orderBy?: PatternRoundGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PatternRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PatternRoundFieldRefs;
}
export interface Prisma__PatternRoundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    section<T extends Prisma.PatternSectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PatternSectionDefaultArgs<ExtArgs>>): Prisma.Prisma__PatternSectionClient<runtime.Types.Result.GetResult<Prisma.$PatternSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PatternRoundFieldRefs {
    readonly id: Prisma.FieldRef<"PatternRound", 'Int'>;
    readonly sectionId: Prisma.FieldRef<"PatternRound", 'Int'>;
    readonly roundNumber: Prisma.FieldRef<"PatternRound", 'Int'>;
    readonly instructions: Prisma.FieldRef<"PatternRound", 'String'>;
    readonly displayOrder: Prisma.FieldRef<"PatternRound", 'Int'>;
}
export type PatternRoundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    where: Prisma.PatternRoundWhereUniqueInput;
};
export type PatternRoundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    where: Prisma.PatternRoundWhereUniqueInput;
};
export type PatternRoundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatternRoundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatternRoundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PatternRoundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternRoundCreateInput, Prisma.PatternRoundUncheckedCreateInput>;
};
export type PatternRoundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PatternRoundCreateManyInput | Prisma.PatternRoundCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PatternRoundCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    data: Prisma.PatternRoundCreateManyInput | Prisma.PatternRoundCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PatternRoundIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PatternRoundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternRoundUpdateInput, Prisma.PatternRoundUncheckedUpdateInput>;
    where: Prisma.PatternRoundWhereUniqueInput;
};
export type PatternRoundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PatternRoundUpdateManyMutationInput, Prisma.PatternRoundUncheckedUpdateManyInput>;
    where?: Prisma.PatternRoundWhereInput;
    limit?: number;
};
export type PatternRoundUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PatternRoundUpdateManyMutationInput, Prisma.PatternRoundUncheckedUpdateManyInput>;
    where?: Prisma.PatternRoundWhereInput;
    limit?: number;
    include?: Prisma.PatternRoundIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PatternRoundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    where: Prisma.PatternRoundWhereUniqueInput;
    create: Prisma.XOR<Prisma.PatternRoundCreateInput, Prisma.PatternRoundUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PatternRoundUpdateInput, Prisma.PatternRoundUncheckedUpdateInput>;
};
export type PatternRoundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
    where: Prisma.PatternRoundWhereUniqueInput;
};
export type PatternRoundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PatternRoundWhereInput;
    limit?: number;
};
export type PatternRoundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PatternRoundSelect<ExtArgs> | null;
    omit?: Prisma.PatternRoundOmit<ExtArgs> | null;
    include?: Prisma.PatternRoundInclude<ExtArgs> | null;
};
